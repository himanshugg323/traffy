import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <section className="pt-24 max-w-7xl mx-auto px-4">
                {children}
                <div className=" text-center flex py-12 sm:py-24 items-center justify-center flex-col">
                    <p className="text-2xl font-semibold sm:text-3xl">Drive huge amounts of visitors</p>
                    <p className="mb-8 mt-1">Get started with your first campaign to get seen by massiv audience</p>
                    <Link to="/" className={cn(buttonVariants({ variant: "default", className: "text-md" }))}>Start Now!</Link>
                </div>
            </section>
            <Footer />
        </>
    )
}
