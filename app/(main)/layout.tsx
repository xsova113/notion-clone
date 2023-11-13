"use client";

import { useConvexAuth } from "convex/react";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";
import { FadeLoader } from "react-spinners";
import Navigation from "./_components/Navigation";
import { useEffect, useState } from "react";
import SearchCommand from "@/components/SearchCommand";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <FadeLoader color={`${resolvedTheme === "dark" ? "gray" : "black"}`} />
      </div>
    );
  }

  if (!isAuthenticated) return redirect("/");

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
