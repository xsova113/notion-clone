"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Heading = () => {
  const router = useRouter();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="capitalize text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, documents, & plans. unified. welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happens.
      </h3>

      <Button onClick={() => router.push("/documents")}>
        Enter Jotion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
