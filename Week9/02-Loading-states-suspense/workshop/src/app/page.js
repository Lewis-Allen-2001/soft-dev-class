import Link from "next/link";

export default function Home() {
  return (
   <>
   <Link href={'/Fast'}>Fast Page</Link>
   <Link href={'/Slow'}>Slow Page</Link>
   </>
  );
}
