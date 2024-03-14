import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"


export default function Faq() {
    return (
        <section className="px-4 max-w-5xl mx-auto pb-12">
            <div className="text-center">
                <p className="text-2xl font-semibold sm:text-3xl mb-1">Frequently Asked Questions</p>
                <p >Let us answer any questions you have about our service</p>
            </div>
            <Accordion type="single" collapsible className=" mt-12 text-gray-300 max-w-2xl mx-auto">
                <AccordionItem value="value-1">
                    <AccordionTrigger className="text-lg">Are the visitors real?</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Absolutely! We have an excessive amount of real traffic that comes through our domain network. When we receive a visitor on any of the sites in the network we check if they match the targeting you choose, and if they do, they are instantly forwarded directly to your website. No click or ad required.
                        </p>
                        <p>We do not use bots. Our visitors are real people from your chosen targets.</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="value-2">
                    <AccordionTrigger className="text-lg">Where do the visitors come from?</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            There are three main sources for our website traffic, this list is always changing as we constantly get more websites in our network.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="value-3">
                    <AccordionTrigger className="text-lg">How does the it works work?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <p>
                            Just <Link to="/" className="text-purple-500">sign up</Link>  here and you will get 500 visitors per day for the first 5 days on any of our plans, that's 2500 visitors for free!
                        </p>
                        <p>
                            After your trial ends you will be moved onto the full subscription and will begin paying the monthly fee.
                        </p>
                        <p>
                            Cancel at any time during your trial and you will not be charged.
                        </p>

                        <Link className="text-purple-500 flex gap-1" to="/"> <ExternalLink className="w-4" /> Start with your first campaign</Link>
                        <Link className="text-purple-500 flex gap-1" to="/"> <ExternalLink className="w-4" /> How to cancel a trial or subscription</Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="value-4">
                    <AccordionTrigger className="text-lg">Can I promote multiple URL's?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <p>
                            We can only accept 1 URL per subscription, but you can change the URL as many times as you like in our dashboard.
                        </p>
                        <p>
                            If you want to promote multiple URLs you can create multiple subscriptions which will allow you to have separate targeting for each URL.
                        </p>
                        <p>
                            But if you want to use the same subscription and targeting for all your URL's then you can either change your URL on a regular basis.
                        </p>
                        <p > Or you can use a link rotator like
                            <Link className="text-purple-500" to="https://linksplit.io/" target="_blank"> linksplit.io </Link>
                            to provide us with a single URL that splits the traffic between several of your websites or links.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="value-5">
                    <AccordionTrigger className="text-lg">How many conversions should I expect?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <p>
                            It can take a bit of creativity and "trial and error" to be able to convert cold traffic. The conversion rate you receive is based on your websites ability to convert the traffic you target.
                        </p>
                        <p>
                            Therefore, we are not able to guarantee any kind of conversion rate, and we have no way of measuring conversions.
                        </p>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="value-6">
                    <AccordionTrigger className="text-lg">Does this work for YouTube videos?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <p>
                            You can use our service to send traffic to a youtube video. But we cannot guarantee any kind of view rate.
                        </p>
                        <p>
                            This is because YouTube does require a certain duration on a video to count it as a view or visitor.
                        </p>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="value-7">
                    <AccordionTrigger className="text-lg">Does this work with AdSense?</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2">
                            <p>
                                Our service can promote sites using any ad platform. But we recommend you do not promote websites with AdSense installed because AdSense does not allow <span className="font-semibold text-gray-500"> forwarded traffic.</span>
                            </p>
                            <p className="flex gap-2">Read the
                                <Link target="_blank" className="text-purple-500 underline flex gap-1" to="https://support.google.com/adsense/answer/48182?hl=en"> <ExternalLink className="w-4" />  AdSense policies here.</Link>
                            </p>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="value-8">
                    <AccordionTrigger className="text-lg">How can I cancle?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <p>
                            If you signed up to a trial or subscription with PayPal then its very easy to cancel at any time.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="value-9">
                    <AccordionTrigger className="text-lg">How can I get a refund?</AccordionTrigger>
                    <AccordionContent >
                        <div className="flex flex-col gap-2">

                            <p>
                                If you are unhappy with our service you can <Link to="/" className="text-purple-500"> request a refund here</Link> .
                            </p>
                            <p className="flex gap-2">You can read our full
                                <Link target="_blank" className="text-purple-500 underline flex gap-1" to="https://support.google.com/adsense/answer/48182?hl=en"> <ExternalLink className="w-4" />  redund policy here.</Link>
                            </p>
                        </div>

                        <p className="mt-6 font-semibold text-lg ">30 Day Money Back Guarantee</p>
                        <p className="mt-3">Your most recent payment qualifies for the 30 Day Money Back Guarantee. If you are unhappy with our service you have 30 days after signing up to cancel and receive a full refund of your latest payment. To cancel your subscription and request a refund please contact our customer support on the <Link to="/" className="text-purple-500"> refund policy page</Link> . </p>

                    </AccordionContent>
                </AccordionItem>


            </Accordion>
        </section>

    )
}
