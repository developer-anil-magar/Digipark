import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Digipark',
  description: 'The solution to parking',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} max-w-[1440px] w-full mx-auto`}>
        {children}
      </body>
    </html>
  );
}
