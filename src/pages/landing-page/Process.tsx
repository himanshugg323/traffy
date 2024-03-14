import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Process() {
    return (
        <section className="px-4 py-24 ">

            <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold capitalize sm:text-3xl"> How we deliver
                    <span className=" text-purple-500" > real visitors </span></h3>
                <p className="max-w-2xl mx-auto mt-1">With our visitor forwarding software we are able to seamlessly redirect our quality traffic to your website in a split-second!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 w-full items-center">
                <img className="w-full  rounded-lg md:mt-0 mt-12 max-h-[360px]" src="/images/barchart.svg" alt="step" />
                <div className="max-w-lg">
                    <div className="flex relative pb-8 sm:pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
                            1
                        </div>
                        <div className=" pl-4">
                            <h2 className="font-semibold capitalize mb-1">We receive a visitor</h2>
                            <p >A new visitor reaches one of our rented websites or parked domains that have huge amounts of traffic.</p>
                        </div>
                    </div>
                    <div className="flex relative pb-8 sm:pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
                            2
                        </div>
                        <div className="pl-4">
                            <h2 className="font-semibold capitalize mb-1">
                                The visitor is checked</h2>
                            <p >Within a split-second we determine the visitors demographics, and check to see if it matches the targeting you choose.
                            </p>
                        </div>
                    </div>
                    <div className="flex relative">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                        </div>
                        <div className="pl-4">
                            <h2 className="font-semibold capitalize mb-1">The visitor is forwarded to you</h2>
                            <p >If the visitor matches your targeted demographics they are then instantly forwarded to your site directly. No click or advertisement required.</p>
                        </div>
                    </div>
                    <Link to="/" className={cn(buttonVariants({ variant: "default", className: "w-full capitalize mt-8 text-lg" }))}>Start Now</Link>

                </div>
            </div>
        </section>)
}
