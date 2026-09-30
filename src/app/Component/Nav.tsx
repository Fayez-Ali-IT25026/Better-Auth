import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/signin">Sign in</Link>
      <Link href="/signup">Sign up</Link>
    </nav>
  );
}