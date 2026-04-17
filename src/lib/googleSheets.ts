import 'server-only';
import { google, type sheets_v4 } from 'googleapis';

export type ThemeName = 'default' | 'green' | 'blue' | 'magenta' | 'orange';

const VALID_THEMES: readonly ThemeName[] = ['default', 'green', 'blue', 'magenta', 'orange'];

export function isValidTheme(value: unknown): value is ThemeName {
  return typeof value === 'string' && (VALID_THEMES as readonly string[]).includes(value);
}

export interface PixelRecord {
  col: number;
  row: number;
  theme: ThemeName | null;
}

const SHEET_TAB = 'Sheet1';
const DATA_RANGE = `${SHEET_TAB}!A2:D`;
const APPEND_RANGE = `${SHEET_TAB}!A:D`;

let cachedClient: sheets_v4.Sheets | null = null;

function getSheetsClient(): sheets_v4.Sheets {
  if (cachedClient) return cachedClient;

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!clientEmail || !rawPrivateKey) {
    throw new Error(
      'Missing Google service account credentials. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY in your environment.',
    );
  }

  const privateKey = rawPrivateKey.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  cachedClient = google.sheets({ version: 'v4', auth });
  return cachedClient;
}

function getSpreadsheetId(): string {
  const id = process.env.GOOGLE_SHEETS_ID;
  if (!id) {
    throw new Error('Missing GOOGLE_SHEETS_ID environment variable.');
  }
  return id;
}

/**
 * Reads the append-only pixel log from the sheet and collapses it to the
 * latest state per (col, row). An empty / missing theme means the pixel was
 * erased.
 */
export async function readPixels(): Promise<PixelRecord[]> {
  const sheets = getSheetsClient();
  const spreadsheetId = getSpreadsheetId();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: DATA_RANGE,
    majorDimension: 'ROWS',
  });

  const rows = response.data.values ?? [];

  // rows are in order of append, so later rows override earlier ones for the
  // same (col, row) key.
  const latest = new Map<string, PixelRecord>();
  for (const entry of rows) {
    const [, colRaw, rowRaw, themeRaw] = entry;
    const col = Number(colRaw);
    const row = Number(rowRaw);
    if (!Number.isInteger(col) || !Number.isInteger(row)) continue;

    const theme = typeof themeRaw === 'string' && isValidTheme(themeRaw) ? themeRaw : null;
    const key = `${col},${row}`;

    if (theme === null) {
      latest.delete(key);
    } else {
      latest.set(key, { col, row, theme });
    }
  }

  return Array.from(latest.values());
}

/**
 * Appends a single pixel event to the log. A null theme means "erased".
 */
export async function appendPixel(record: {
  col: number;
  row: number;
  theme: ThemeName | null;
}): Promise<void> {
  const sheets = getSheetsClient();
  const spreadsheetId = getSpreadsheetId();

  const timestamp = new Date().toISOString();
  const themeValue = record.theme ?? '';

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: APPEND_RANGE,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[timestamp, String(record.col), String(record.row), themeValue]],
    },
  });
}
