"use client"
import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
        placeholder={undefined}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth={true}
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-40 border-0 w-[95vw] mx-auto ml-32 rounded-md"
      placeholder={undefined}
    >
      <div className="   mx-auto pl-11 flex items-center justify-between">
        {/* <Typography
          as="a"
          href="https://www.material-tailwind.com"
          target="_blank"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
          placeholder={undefined}
        >
          Material Tailwind
        </Typography> */}

        <h1 className="text-slate-900 font-noto-serif text-xl">Infinite Minds</h1>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem><Link href='/' >Home</Link></NavItem>
          <NavItem><Link href='/about' >About Us</Link></NavItem>
          <NavItem><Link href='/blog' >Blog</Link></NavItem>
          <NavItem><Link href='/Servicess' >Services</Link></NavItem>
         
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm" placeholder={undefined}
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm" placeholder={undefined}
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm" placeholder={undefined}
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          {/* <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm"  placeholder={undefined}>
              Blocks
            </Button>
          </a> */}
        </div>
        <IconButton
                  variant="text"
                  color={isScrolling ? "gray" : "white"}
                  onClick={handleOpen}
                  className="ml-auto inline-block lg:hidden"placeholder={undefined}        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Infinit Minds</NavItem>
            <NavItem><Link href='/about' >About Us</Link></NavItem>
            <NavItem><Link href='/blog' >Blog</Link></NavItem>
            <NavItem><Link href='/Servicess' >Services</Link></NavItem>
           
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton variant="text" color="gray" size="sm"  placeholder={undefined}>
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm" placeholder={undefined}>
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm" placeholder={undefined}>
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray" size="sm" className="ml-auto"  placeholder={undefined}>
                Blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
