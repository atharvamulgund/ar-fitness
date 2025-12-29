"use client";
import React, { useEffect, useState } from "react";
import { LoginForm } from "./Login";
import { SignupForm } from "./Register";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

const GetStartedWrapper = () => {
  const [page, setPage] = useState("Login");
  const { push } = useRouter();
  const handleClick = (toggle = "") => {
    setPage(toggle);
    return toggle;
  };
  // @ts-expect-error, no need of type
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    if (user) push("/dashboard");
  }, [user]);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {page == "Login" ? (
          <LoginForm handleClick={handleClick} />
        ) : (
          <SignupForm handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default GetStartedWrapper;
