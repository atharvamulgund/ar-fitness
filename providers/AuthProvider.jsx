"use client";

import { client } from "@/lib/appwrite";
import { Account, ID } from "appwrite";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const AuthContext = createContext(null);
const account = new Account(client);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore user on app load
  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await account.get();
        setUser(user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    await account.createEmailPasswordSession(email, password);
    const user = await account.get();
    setUser(user);
    toast.success("Logged in successfully");
    router.push("/dashboard");
  };

  const signin = async (email, password) => {
    await account.create(ID.unique(), email, password);
    await account.createEmailPasswordSession(email, password);
    const user = await account.get();
    setUser(user);
    toast.success("Account created");
    router.push("/dashboard");
  };

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
    router.push("/");
    toast.success("Logged out successfully");
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
