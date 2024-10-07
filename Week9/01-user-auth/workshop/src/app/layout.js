import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import Link from "next/link"


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>

<Link href={"/"}>Home</Link>

            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
          <footer>THIS IS A FOOTER BRUV</footer>
        </body>
      </html>
    </ClerkProvider>
  )
}