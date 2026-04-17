import { NextResponse } from 'next/server';
import { appendPixel, isValidTheme, readPixels, type ThemeName } from '@/lib/googleSheets';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_COORD = 1000;

export async function GET() {
  try {
    const pixels = await readPixels();
    return NextResponse.json(
      { pixels },
      {
        headers: {
          // Allow the browser to reuse for a few seconds so rapid polling
          // still feels fresh without hammering Sheets.
          'Cache-Control': 'no-store',
        },
      },
    );
  } catch (error) {
    console.error('[api/pixels] GET failed', error);
    return NextResponse.json({ pixels: [], error: 'Failed to load pixels.' }, { status: 500 });
  }
}

interface PostBody {
  col?: unknown;
  row?: unknown;
  theme?: unknown;
}

export async function POST(request: Request) {
  let body: PostBody;
  try {
    body = (await request.json()) as PostBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const col = typeof body.col === 'number' ? body.col : NaN;
  const row = typeof body.row === 'number' ? body.row : NaN;

  if (!Number.isInteger(col) || !Number.isInteger(row)) {
    return NextResponse.json({ error: 'col and row must be integers.' }, { status: 400 });
  }

  if (Math.abs(col) > MAX_COORD || Math.abs(row) > MAX_COORD) {
    return NextResponse.json(
      { error: `col and row must be within \u00b1${MAX_COORD}.` },
      { status: 400 },
    );
  }

  let theme: ThemeName | null;
  if (body.theme === null || body.theme === undefined || body.theme === '') {
    theme = null;
  } else if (isValidTheme(body.theme)) {
    theme = body.theme;
  } else {
    return NextResponse.json({ error: 'Invalid theme value.' }, { status: 400 });
  }

  try {
    await appendPixel({ col, row, theme });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[api/pixels] POST failed', error);
    return NextResponse.json({ error: 'Failed to save pixel.' }, { status: 500 });
  }
}
