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
                <Link to="/" className={cn(buttonVariants({ variant: "default", className: "capitalize mt-4" }))}>Start Now!
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
                        <p className="heading">OVERVIEW</p>
                        <p className="desc">This website is operated by Arak Traffy.co. Throughout the site, the terms “we”, “us” and “our” refer to Traffy.co. Traffy.co offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
                    </div>

                    <div id="service-agreement" className="mb-12" >
                        <p className="heading">Service Terms</p>
                        <p className="desc">By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
                        <ul className="list-decimal pl-8">
                            <li className="mt-4">Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</li>
                            <li className="mt-2">
                                Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.               </li>
                            <li className="mt-2">
                                Our store is hosted on Vercel Inc. They provide us with the platform that allows us to sell our products and Services to you.</li>

                        </ul>
                    </div>

                    <div id="disclaimer" className="mb-12">
                        <p className="heading">GENERAL CONDITIONS</p>
                        <p className="desc">
                            We reserve the right to refuse Service to anyone for any reason at any time.
You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. </p>

                        <p className="mt-2">You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without express written permission by us</p>

                        <p className="mt-2">
                            The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
                    </div>

                    <div className="mb-12" id="limitations" >
                        <p className="heading">ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</p>
                        <p className="desc">
                            We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>
                    </div>

                    <div className="mb-12" id="accuracy-of-materials">
                        <p className="heading">MODIFICATIONS TO THE SERVICE AND PRICES</p>
                        <p className="desc">
                            Prices for our products are subject to change without notice.
We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. </p>
                        <p className="desc">
                            We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
                    </div>

                    <div className="mb-12" id="links">
                        <p className="heading">PRODUCTS OR SERVICES (if applicable)/p>
                        <p className="desc">
                            Certain products or Services may be available exclusively online through the website. These products or Services may have limited quantities and are subject to return or exchange only according to our Refund Policy:</p>
<p className="desc">
                            We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or Service made on this site is void where prohibited.
We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>

                    </div>

                    <div className="mb-12" id="modifications" >
                        <p className="heading">ACCURACY OF BILLING AND ACCOUNT INFORMATION</p>
                        <p className="desc">
                            We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors. </p>
<p className="desc">
                            You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed. </p>
                    </div>

                    <div className="mb-12" id="governing-law" >
                        <p className="heading">CHANGES TO TERMS OF SERVICE</p>
                        <p className="desc">
                            You can review the most current version of the Terms of Service at any time at this page.
We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes. </p>
                    </div>

                        <div className="mb-12" id="governing-law" >
                        <p className="heading">CONTACT INFORMATION</p>
                        <p className="desc">
                            Questions about the Terms of Service should be sent to us at contactus@traffy.co
Our contact information is posted below: </p>


<br><p className="desc">Trade name: Growth Optics </p></br>
<br><p className="desc">Phone number: 9910088258 </p></br>
<br><p className="desc">Email: Contactus@traffy.co </p></br>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
