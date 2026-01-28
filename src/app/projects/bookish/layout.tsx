import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bookish ＊ Angelina Wu',
  description: 'Redesigning the reading experience with accessibility and sustainability in mind',
};

export default function BookishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
