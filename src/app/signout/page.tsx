"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <div>
      <button onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;