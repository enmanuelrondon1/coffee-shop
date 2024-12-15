import Link from "next/link";
import Logo from "../../../../public/website/coffee_logo.png";
import Image from "next/image";
import { links } from "./Navbar.data";
import { Button } from "@/components/ui/button";
import { FaCoffee } from "react-icons/fa";
import { ModeToggle } from "../../staff/ModeToggle";

export const Nabvar = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-white dark:bg-black dark:text-white p-4 sm:mx-0 bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2 ">
        <div className="flex justify-between items-center">
          <div data-aos="fade-down" data-aos-once="true">
            <Link
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive  "
            >
              <Image
                src={Logo}
                alt="logo"
                width={100}
                height={100}
                className="w-14"
              />
              Coffe Cafe
            </Link>
          </div>

          <div
            data-aos="fade-down"
            ata-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="inline-block text-xl py-4 text-white/70 hover:text-white duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-2">
              Order
              <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Button>
            <span className="text-black dark:text-white">

            <ModeToggle />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
