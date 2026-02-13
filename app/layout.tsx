import './globals.css';

export const metadata = {
  title: 'love map ❤️',
  description: 'love you forever and always',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
