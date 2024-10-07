import Link from "next/link"
import { SignedIn } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <>
<Link href={"/profile"}>Profile Page</Link>
    <h1>This is the home page bruv</h1>
    <SignedIn>
        <h2>
          Welcome {user?.firstName} 
        </h2>
      </SignedIn>
    </>
  );
}
