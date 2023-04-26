import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/ui/Button";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <>
    <Navbar></Navbar>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto items-center relative sm:items-start">
        <div>
          <h1 className="text-6xl max-w-lg">
            <b>Your personal Finance Manager</b>
          </h1>
        </div>
        <div className="max-w-lg">
          Never lose track of your finances again! Start using this awesome
          Finance Manager today, just by pressing the button below.
        </div>
        <div className="flex">
          <Link href={"/login"}>
            <Button className="w-fit" variant={"call2action"}>
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
