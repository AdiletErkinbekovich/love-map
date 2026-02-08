import './globals.css';

export const metadata = {
  title: 'my lovely Diana! ❤️',
  description: 'love you forever and always',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
