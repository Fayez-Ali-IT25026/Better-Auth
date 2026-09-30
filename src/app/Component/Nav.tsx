"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { authClient } from "@/lib/auth-client";




// const authSign= () =>{
//   <Link
//             href="/signin"
//             className="rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-blue-400"
//           >
//             Sign in
//           </Link>                               WRONG WARRNING      

//           <Link
//             href="/signup"
//             className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
//           >
//             Sign up
//           </Link>
// }





// Correct way to define authLink as a React fragment containing the sign-in and sign-up links
// const authLink = 
// <>
// <Link
//             href="/signin"
//             className="rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-blue-400"
//           >
//             Sign in
//           </Link>

//           <Link
//             href="/signup"
//             className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
//           >
//             Sign up
//           </Link>
// </>





//WARRNING: can not use the useSession hook outside of a component or a custom hook, so we need to move the authLink definition inside the Nav component.

//step 1: use the useSession hook to get the current session (from the better-auth documentation)
// const { data: session } = authClient.useSession()

//step 2: use a conditional statement to check if the user is authenticated
// const authLink = <>
// {

//     session?.user ? <>
//         Welcome {session.user.name}
//     </> :
//     <>
//     <Link
//       href="/signin"
//       className="rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-blue-400"
//     >
//       Sign in
//     </Link>
//     <Link
//       href="/signup"
//       className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
//     >
//       Sign up
//     </Link>
//   </>

// }
// </>








export default function Nav() {
//step 1: use the useSession hook to get the current session (from the better-auth documentation)
  const { data: session } = authClient.useSession()
//step 2: use a conditional statement to check if the user is authenticated
  const authLink = <>
{

    session?.user ? <>
        Welcome {session.user.name}
    </> :
    <>
    <Link
      href="/signin"
      className="rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-blue-400"
    >
      Sign in
    </Link>
    <Link
      href="/signup"
      className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
    >
      Sign up
    </Link>
  </>

}
</>


//step 3: use the authLink fragment in the JSX to render the sign-in and sign-up links
  return (
    <nav className="border-b border-gray-800 bg-gray-950">

      

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-400"
        >
          <BookOpen className="h-7 w-7" />
          <span>MyApp</span>
        </Link>




<div className="flex items-center gap-2">
  <Link
            href="/"
            className="rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-blue-400"
          >
            Dashboard
          </Link>
</div>




        {/* Navigation */}
        <div className="flex items-center gap-2">
          

          {/* <Link
            href="/signin"
            className="rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-blue-400"
          >
            Sign in
          </Link> */}


          {/* Use the authLink fragment here to render the sign-in and sign-up links */}
          {authLink} 



          {/* <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
          >
            Sign up
          </Link> */}


          <Link
            href="/signout"
            className="rounded-lg px-4 py-2 text-red-400 transition hover:bg-red-950"
          >
            Sign out
          </Link>
        </div>

      </div>
    </nav>
  );
}