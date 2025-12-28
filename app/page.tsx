import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["devanagari"],
    weight: "100",
  })

export default function Home() {
  
  

  return (
    <main className = "flex flex-col items-center justify-center h-screen p-7 bg-black text-white">
      <div className="space-y-5 flex flex-col items-center justify-center">
        <h1 className={cn("text-5xl font-bold",font.className)}>crafted for the thoughtworthy</h1>
        <LoginButton>
        <Button  size ="lg" variant={"link"} className="text-3xl text-white">Get Started</Button>
        </LoginButton>
      </div>
    </main>
  );
}
