import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>This is the header</header>
        <nav>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts/1">Post 1</Link>
        <Link href="/posts/2">Post 2</Link>
        <Link href="/posts/3">Post 1</Link>
        </nav>
        {children}
        <footer>this is the footer</footer>
      </body>
    </html>
  );
}
