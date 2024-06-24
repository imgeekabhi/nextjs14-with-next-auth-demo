"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignoutUser = () => {
  const router = useRouter();
  return (
    <>
      <button type="button" onClick={() => router.push("/api/auth/signout")}>
        Logout
      </button>
    </>
  );
};

export default SignoutUser;
