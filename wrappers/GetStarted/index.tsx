"use client"
import React, { useState } from 'react'
import { LoginForm } from './Login'
import { SignupForm } from './Register'

const GetStartedWrapper = () => {
    const [page, setPage] = useState("Login")
    const handleClick = (toggle = "") => {
      console.log(toggle);
      
      setPage(toggle)
      return toggle
    }
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
}

export default GetStartedWrapper;