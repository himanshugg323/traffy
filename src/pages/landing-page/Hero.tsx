import RedoAnimText from "@/components/ui-lib/Typewriter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

// ___________________|| TYPING ANIMATION IN HERO TEXT ||______________
const TypingAimationText = ["Website", "Affiliate Link", "Blog"]
// _________________________________________


export default function Hero() {
    return (
        <section className="flex items-center bg-gradient-to-br  flex-col justify-center h-[calc(100vh)] max-h-[660px] sm:max-h-[770px] text-center">

            <Link to="" className="border flex  gap-2 items-center max-w-max mx-auto p-1 rounded-full">
                <Button className="rounded-full" >New</Button>
                <span className="text-sm font-medium text-gray-700 dark:hover:text-purple-500 dark:text-gray-300 flex ">
                    Launch My First Campaign <span> <ChevronRight className="w-5 m-0 h-full" /> </span>
                </span>
            </Link>
            <h1 className="mt-8 text-wrap min-h-[120px] text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125] capitalize max-w-full overflow-hidden">Attract <span className="text-purple-500"> Genuine </span> Visitors<br className="hidden sm:block" />
                <span className="px-2">
                    To Your
                </span>
                <br className="sm:hidden" />
                <span className="text-purple-500">
                    <RedoAnimText texts={TypingAimationText} />
                </span>
            </h1>
            <p className="text-wrap mx-auto px-2 mt-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300">Drive real visitors who are genuinely interested in what you offer, ensuring meaningful interactions and potential conversions.</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
                <div className="py-1.5 px-4 bg-gray-950/5 border dark:border-white/10 dark:bg-white/5 rounded-full text-purple-500 ">
                    <Link
                        to="/docs/installation"
                        className="flex gap-1"
                    >
                        <Rocket />
                        <span className="text-nowrap">Start Now!</span></Link
                    >
                </div>
            </div>
        </section>
    )
}