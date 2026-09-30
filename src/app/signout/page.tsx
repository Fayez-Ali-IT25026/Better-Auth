"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin"); // Redirect to the sign-in page after successful sign-out 
        },
      },
    });
  };

  return (
    <div className="rounded-lg px-4 py-2 text-red-400 transition hover:bg-red-950">
      <button onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;