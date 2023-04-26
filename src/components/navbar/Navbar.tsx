import { FC } from "react";
import Button from "../ui/Button";
import Link from "next/link";


interface NavbarProps {}

const navbar: FC<NavbarProps> = ({}) => {
  return <div className="flex flex-row justify-between items-center">
    <nav>
      <div>logo</div>
      <Link href={"/login"}><Button variant={"call2action"}>Sign Up</Button></Link> 
    </nav> 
  </div>; 
};

export default navbar;
