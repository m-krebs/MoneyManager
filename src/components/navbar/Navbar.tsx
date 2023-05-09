import { FC } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {}

const navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="justify-between items-center max-w-7xl mx-auto my-3">
      <nav className="flex flex-row">
        <div>
          <Image
            src="https://picsum.photos/100/50"
            alt="Logo"
            width={100}
            height={50}
          />
        </div>
        <Link className="float-right mr-0" href={"/login"}>
          <Button variant={"call2action"}>Sign Up</Button>
        </Link>
      </nav>
    </div>
  );
};

export default navbar;
