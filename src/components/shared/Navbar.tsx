import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const Links = [
    {
        link: "Home",
        path: "/"
    },
    {
        link: "Benifits",
        path: "#benifits"
    },
    {
        link: "Industries",
        path: "#industries"
    },
    {
        link: "Contact",
        path: "/contact"
    },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <header>
            <nav className="fixed px-4 overflow-hidden z-20 w-full  dark:bg-zinc-900 dark:shadow-md rounded-b-lg dark:shadow-gray-950/10 border-b  backdrop-blur">
                <div className="m-auto max-w-7xl 2xl:px-0">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-full items-center flex justify-between md:w-auto">
                            <Link to="/" aria-label="tailus logo">
                                <img src="/logo.png" className="w-[100px] h-[60px] object-contain" />
                            </Link>
                            <div className="flex md:hidden">
                                <Navbar2 open={open} setOpen={setOpen} />
                            </div>
                        </div>
                        <div className="w-full h-0 md:w-fit flex-wrap justify-end items-center space-y-8 md:space-y-0 md:flex md:h-fit md:flex-nowrap">
                            <div className="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 md:pr-4 md:mt-0">
                                <ul className="space-y-6 tracking-wide text-base md:text-sm md:flex md:space-y-0">
                                    {
                                        Links.map((link, index) => {
                                            return <li key={index}>
                                                {link.path.includes("#") ?
                                                    <AnchorLink offset={100} href={link.path}
                                                        className="block md:px-4 transition hover:text-primary-600 hover:text-purple-500"
                                                    >
                                                        {link.link}
                                                    </AnchorLink> :
                                                    <Link to={link.path} className="block md:px-4 transition hover:text-primary-600 hover:text-purple-500">
                                                        {link.link}
                                                    </Link>
                                                }
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="w-full border-l-2 pl-1">
                                <Button variant="ghost" className="mr-2" >
                                    <span>Login</span>
                                </Button>
                                <Button >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export function Navbar2({ open, setOpen }: { open: boolean, setOpen: (_open: boolean) => void }) {
    return (
        <Drawer open={open} >
            <DrawerTrigger><MenuIcon onClick={() => setOpen(!open)} /></DrawerTrigger>
            <DrawerContent className="px-4">
                <ul className="flex flex-col gap-4 ">
                    <li className="font-bold md:px-4"><img src="/logo.png" alt="traffy" className="max-w-[120px]" /></li>
                    {
                        Links.map((link, index) => {
                            return <li onClick={() => setOpen(!open)} key={index}>
                                {/* <Link to={link.path} className="block md:px-4 transition hover:text-primary-600 dark:hover:text-purple-500">
                                    <span>{link.link}</span>
                                </Link> */}
                                {link.path.includes("#") ?
                                    <AnchorLink offset={100} href={link.path}
                                        className="block md:px-4 transition hover:text-primary-600 hover:text-purple-500"
                                    >
                                        {link.link}
                                    </AnchorLink> :
                                    <Link to={link.path} className="block md:px-4 transition hover:text-primary-600 hover:text-purple-500">
                                        {link.link}
                                    </Link>
                                }
                            </li>
                        })
                    }
                </ul>
                <Button variant="ghost"
                    className="mb-2 mt-1">
                    <span>Login</span>
                </Button>
                <Button >
                    Sign Up
                </Button>
                <DrawerFooter>
                    <DrawerClose />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

