import { Link } from "react-router-dom";
import Layout from "./Layout";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import "./style.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from "react";

export default function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <div className="text-center pt-12">
                <h3 className="text-2xl font-semibold sm:text-4xl">Terms of Service</h3>
                <p className="mt-1 pl-1">Our agreement to providing you with website visitors.</p>
                <Link to="/" className={cn(buttonVariants({ variant: "default", className: "capitalize mt-4" }))}>Start your free trial
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-10 py-20 px-4" >
                <div className="sm:sticky top-[100px] bg-zinc-800 max-h-[500px] flex flex-col px-6 py-4 rounded-md gap-6 min-w-max pr-8 ">
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#terms">Terms</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#service-agreement">Service Agreement</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#disclaimer">Disclaimer</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#limitations">Limitations</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#accuracy-of-materials">Accuracy Of Materials</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#links">Links</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#modifications">Modifications</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#governing-law">Governing Law</AnchorLink>
                </div>

                <div className="mt-8 sm:mt-0">

                    <div id="terms" className="mb-12">
                        <p className="heading">1. Terms</p>
                        <p className="desc">By accessing the website at https://www.simpletraffic.co, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                    </div>

                    <div id="service-agreement" className="mb-12" >
                        <p className="heading">2. Service Agreement</p>
                        <p className="desc">By subscribing to any of our plans or purchasing any of our services or digital products the buyer is agreeing to the following:
                        </p>
                        <ul className="list-decimal pl-8">
                            <li className="mt-4">The buyer has read and agrees to our Terms of Service, Privacy Policy, Cookie Policy, and Refund Policy.
                            </li>
                            <li className="mt-2">
                                The buyer agrees to allow us to send visitors to their website.
                            </li>
                            <li className="mt-2">
                                The buyer agrees not to hold us liable for any impact they incur from the traffic they receive from us.
                            </li>
                            <li className="mt-2">
                                It is the responsibility of the buyer to provide us with an accurate URL when placing an order.
                            </li>
                        </ul>
                    </div>

                    <div id="disclaimer" className="mb-12">
                        <p className="heading">3. Disclaimer</p>
                        <p className="desc">
                            The materials on Simple Traffic (Ascend Group)'s website are provided on an 'as is' basis. Simple Traffic (Ascend Group) makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <p className="mt-2">We cannot guarantee any kind of results (ad clicks, leads, sign ups, sales, etc) from using our services.</p>

                        <p className="mt-2">
                            Further, Simple Traffic (Ascend Group) does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                        </p>
                    </div>

                    <div className="mb-12" id="limitations" >
                        <p className="heading">4. Limitations</p>
                        <p className="desc">
                            In no event shall Simple Traffic (Ascend Group) or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Simple Traffic (Ascend Group)'s website, even if Simple Traffic (Ascend Group) or a Simple Traffic (Ascend Group) authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                        </p>
                    </div>

                    <div className="mb-12" id="accuracy-of-materials">
                        <p className="heading">5. Accuracy of materials</p>
                        <p className="desc">
                            The materials appearing on Simple Traffic (Ascend Group)'s website could include technical, typographical, or photographic errors. Simple Traffic (Ascend Group) does not warrant that any of the materials on its website are accurate, complete or current. Simple Traffic (Ascend Group) may make changes to the materials contained on its website at any time without notice. However Simple Traffic (Ascend Group) does not make any commitment to update the materials.
                        </p>
                    </div>

                    <div className="mb-12" id="links">
                        <p className="heading">6. Links</p>
                        <p className="desc">
                            Simple Traffic (Ascend Group) has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Simple Traffic (Ascend Group) of the site. Use of any such linked website is at the user's own risk.
                        </p>
                    </div>

                    <div className="mb-12" id="modifications" >
                        <p className="heading">7. Modifications</p>
                        <p className="desc">
                            Simple Traffic (Ascend Group) may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </div>

                    <div className="mb-12" id="governing-law" >
                        <p className="heading">8. Governing Law</p>
                        <p className="desc">
                            These terms and conditions are governed by and construed in accordance with the laws of Dublin, Ireland and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </div>

                </div>
            </div>

        </Layout>
    )
}
