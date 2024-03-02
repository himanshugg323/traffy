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

const Links = [
    {
        link: "Contact",
        path: "/"
    },
    {
        link: "Reviews",
        path: "#reviws"
    },
    {
        link: "Pricing",
        path: "#pricing"
    },
    {
        link: "Help",
        path: "/help"
    },
]

export default function Navbar() {
    return (
        <header>
            <nav className="fixed px-4 overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/75 dark:shadow-md rounded-b-lg dark:shadow-gray-950/10 border-b  border-x backdrop-blur">
                <div className="m-auto max-w-7xl 2xl:px-0">
                    <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
                        <div className="w-full items-center flex justify-between md:w-auto">
                            <Link to="/" aria-label="tailus logo">
                                Brand Logo
                            </Link>
                            <div className="flex md:hidden">
                                <Navbar2 />
                            </div>
                        </div>
                        <div className="w-full h-0 md:w-fit flex-wrap justify-end items-center space-y-8 md:space-y-0 md:flex md:h-fit md:flex-nowrap">
                            <div className="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 md:pr-4 md:mt-0">
                                <ul className="space-y-6 tracking-wide text-base md:text-sm md:flex md:space-y-0">
                                    {
                                        Links.map((link, index) => {
                                            return <li key={index}>
                                                <Link to={link.path} className="block md:px-4 transition hover:text-primary-600 dark:hover:text-purple-500">
                                                    <span>{link.link}</span>
                                                </Link>
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


export function Navbar2() {
    return (
        <Drawer>
            <DrawerTrigger><MenuIcon /></DrawerTrigger>
            <DrawerContent className="px-4">
                <ul className="flex flex-col gap-4 ">
                    <li className="font-bold md:px-4">Brand Logo</li>
                    {
                        Links.map((link, index) => {
                            return <li key={index}>
                                <Link to={link.path} className="block md:px-4 transition hover:text-primary-600 dark:hover:text-purple-500">
                                    <span>{link.link}</span>
                                </Link>
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

