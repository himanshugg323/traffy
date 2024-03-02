import { Link } from "react-router-dom";
import Layout from "./Layout";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import "./style.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from "react";

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <div className="text-center pt-12">
                <h3 className="text-2xl font-semibold sm:text-4xl">Privacy Policy</h3>
                <p className="mt-1 pl-1">We take your privacy very seriously, read below for our in depth policy.</p>
                <Link to="/" className={cn(buttonVariants({ variant: "default", className: "capitalize mt-4" }))}>Start your free trial
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-10 py-20 " >
                <div className="sm:sticky top-[100px] bg-zinc-800 max-h-[700px] flex flex-col px-6 py-4 rounded-md gap-6 w-full sm:min-w-[240px] md:min-w-[300px] pr-8 ">
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t0">Overview</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t1"> Information we collect</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t2">Legal bases for processing</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t3">Collection and use of information</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t4">Disclosure of personal information to third parties</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t5"> International transfers of personal information</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t6">Your rights and controlling your personal information</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t7">Cookies</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t8">Business transfers</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t9"> Limits of our policy</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t10">Changes to this policy</AnchorLink>
                </div>

                <div className="mt-8 sm:mt-0 text-gray-400">

                    <div className="mb-12" id="t0">
                        <p className="heading">Overview</p>
                        <p className="desc">Your privacy is important to us. It is Simple Traffic (Ascend Group)'s policy to respect your privacy regarding any information we may collect from you across our website, https://www.simpletraffic.co, and other sites we own and operate.</p>
                    </div>

                    <div id="t1" className="mb-12">
                        <p className="heading">1. Information we collect</p>
                        <p className="desc">Log data: When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>
                        <p className="mt-2">Device data: We may also collect data about the device you’re using to access our website. This data may include the device type, operating system, unique device identifiers, device settings, and geo-location data. What we collect can depend on the individual settings of your device and software. We recommend checking the policies of your device manufacturer or software provider to learn what information they make available to us.</p>
                        <p className="mt-2">Personal information: We may ask for personal information, such as your name, email, payment information.</p>
                    </div>

                    <div id="t2" className="mb-12" >
                        <p className="heading">2. Legal bases for processingt</p>
                        <p className="desc">We will process your personal information lawfully, fairly and in a transparent manner. We collect and process information about you only where we have legal bases for doing so. These legal bases depend on the services you use and how you use them, meaning we collect and use your information only where:
                        </p>
                        <ul className="list-decimal pl-8">
                            <li className="mt-4">It’s necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract (for example, when we provide a service you request from us).</li>
                            <li className="mt-2">
                                It satisfies a legitimate interest (which is not overridden by your data protection interests), such as for research and development, to market and promote our services, and to protect our legal rights and interests.
                            </li>
                            <li className="mt-2">
                                You give us consent to do so for a specific purpose (for example, you might consent to us sending you our newsletter).
                            </li>
                            <li className="mt-2">
                                We need to process your data to comply with a legal obligation.
                            </li>
                        </ul>
                        <p className="mt-2">
                            Where you consent to our use of information about you for a specific purpose, you have the right to change your mind at any time (but this will not affect any processing that has already taken place).
                        </p>
                        <p className="mt-2">
                            We don’t keep personal information for longer than is necessary. While we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification. That said, we advise that no method of electronic transmission or storage is 100% secure and cannot guarantee absolute data security. If necessary, we may retain your personal information for our compliance with a legal obligation or in order to protect your vital interests or the vital interests of another natural person.
                        </p>
                    </div>

                    <div id="t3" className="mb-12">
                        <p className="heading">3. Collection and use of information</p>
                        <p className="desc">
                            We may collect, hold, use and disclose information for the following purposes and personal information will not be further processed in a manner that is incompatible with these purposes:
                        </p>

                        <ul className="pl-8 list-disc mt-4">
                            <li className="mt-2">
                                To enable you to customise or personalise your experience of our website.
                            </li>
                            <li className="mt-2">
                                To enable you to access and use our website, associated applications and associated social media platforms.
                            </li>
                            <li className="mt-2">
                                To contact and communicate with you.
                            </li>
                            <li className="mt-2">
                                For internal record keeping and administrative purposes.
                            </li>
                            <li className="mt-2">
                                For analytics, market research and business development, including to operate and improve our website, associated applications and associated social media platforms.
                            </li>
                            <li className="mt-2">
                                To run competitions and/or offer additional benefits to you.
                            </li>
                            <li className="mt-2">
                                For advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you.
                            </li>
                            <li className="mt-2">
                                To comply with our legal obligations and resolve any disputes that we may have.
                            </li>
                        </ul>
                    </div>
                    <div id="t4" className="mb-12">
                        <p className="heading">4. Disclosure of personal information to third parties</p>
                        <p className="desc">
                            We may disclose personal information to:
                        </p>

                        <ul className="pl-8 list-disc mt-4">
                            <li className="mt-2">
                                Third party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or problem-solving providers, marketing or advertising providers, professional advisors and payment systems operators.                            </li>
                            <li className="mt-2">
                                Our employees, contractors and/or related entities.
                            </li>
                            <li className="mt-2">
                                Sponsors or promoters of any competition we run.
                            </li>
                            <li className="mt-2">
                                Credit reporting agencies, courts, tribunals and regulatory authorities, in the event you fail to pay for goods or services we have provided to you.
                            </li>
                            <li className="mt-2">
                                Courts, tribunals, regulatory authorities and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend our legal rights.
                            </li>
                            <li className="mt-2">
                                Third parties, including agents or sub-contractors, who assist us in providing information, products, services or direct marketing to you; .
                            </li>
                            <li className="mt-2">
                                Third parties to collect and process data.
                            </li>
                        </ul>
                    </div>



                    <div className="mb-12" id="t5">
                        <p className="heading">5. International transfers of personal information
                        </p>
                        <p className="desc">
                            The personal information we collect is stored and processed in United States and Ireland, or where we or our partners, affiliates and third-party providers maintain facilities. By providing us with your personal information, you consent to the disclosure to these overseas third parties.
                        </p>
                        <p className="mt-2">
                            We will ensure that any transfer of personal information from countries in the European Economic Area (EEA) to countries outside the EEA will be protected by appropriate safeguards, for example by using standard data protection clauses approved by the European Commission, or the use of binding corporate rules or other legally accepted means.
                        </p>
                        <p className="mt-2">
                            Where we transfer personal information from a non-EEA country to another country, you acknowledge that third parties in other jurisdictions may not be subject to similar data protection laws to the ones in our jurisdiction. There are risks if any such third party engages in any act or practice that would contravene the data privacy laws in our jurisdiction and this might mean that you will not be able to seek redress under our jurisdiction’s privacy laws.</p>
                    </div>

                    <div className="mb-12" id="t6">
                        <p className="heading">6. Your rights and controlling your personal information</p>
                        <p className="desc">
                            <span className="font-semibold text-gray-200">Choice and consent: </span>
                            Choice and consent: By providing personal information to us, you consent to us collecting, holding, using and disclosing your personal information in accordance with this privacy policy. If you are under 16 years of age, you must have, and warrant to the extent permitted by law to us, that you have your parent or legal guardian’s permission to access and use the website and they (your parents or guardian) have consented to you providing us with your personal information. You do not have to provide personal information to us, however, if you do not, it may affect your use of this website or the products and/or services offered on or through it.
                        </p>
                        <p className="desc">
                            <span className="font-semibold text-gray-200">Information from third parties: </span>
                            If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.
                        </p>
                        <p className="desc">
                            <span className="font-semibold text-gray-200">Restrict: </span>
                            You may choose to restrict the collection or use of your personal information. If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the details below. If you ask us to restrict or limit how we process your personal information, we will let you know how the restriction affects your use of our website or products and services.
                        </p>
                        <p className="desc">
                            <span className="font-semibold text-gray-200">Access and data portability: </span>
                            You may request details of the personal information that we hold about you. You may request a copy of the personal information we hold about you. Where possible, we will provide this information in CSV format or other easily readable machine format. You may request that we erase the personal information we hold about you at any time. You may also request that we transfer this personal information to another third party.
                        </p>
                        <p className="desc">
                            <span className="font-semibold text-gray-200">Correction: </span>
                            If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant or misleading, please contact us using the details below. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading or out of date.
                        </p>
                        <p className="desc">
                            <span className="font-semibold text-gray-200">Notification of data breaches: </span>
                            We will comply laws applicable to us in respect of any data breach.
                        </p>
                        <p className="desc">
                            <span className="font-semibold text-gray-200">Complaints: </span>
                            If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.
                        </p>
                        <p className="desc">
                            <span className="font-semibold text-gray-200">Unsubscribe: </span>
                            To unsubscribe from our e-mail database or opt-out of communications (including marketing communications), please contact us using the details below or opt-out using the opt-out facilities provided in the communication.
                        </p>
                    </div>

                    <div className="mb-12" id="t7" >
                        <p className="heading">7. Cookies</p>
                        <p className="desc">
                            We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified. Please refer to our <Link to="/cookies-policy" className="text-purple-500"> Cookie Policy </Link>  for more information.
                        </p>
                    </div>

                    <div className="mb-12" id="t8" >
                        <p className="heading">8. Business transfers</p>
                        <p className="desc">
                            If we or our assets are acquired, or in the unlikely event that we go out of business or enter bankruptcy, we would include data among the assets transferred to any parties who acquire us. You acknowledge that such transfers may occur, and that any parties who acquire us may continue to use your personal information according to this policy
                        </p>
                    </div>
                    <div className="mb-12" id="t9" >
                        <p className="heading">9. Limits of our policy</p>
                        <p className="desc">
                            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.
                        </p>
                    </div>
                    <div className="mb-12" id="t10" >
                        <p className="heading">10. Changes to this policy</p>
                        <p className="desc">
                            At our discretion, we may change our privacy policy to reflect current acceptable practices. We will take reasonable steps to let users know about changes via our website. Your continued use of this site after any changes to this policy will be regarded as acceptance of our practices around privacy and personal information.
                        </p>
                        <p className="desc">
                            If we make a significant change to this privacy policy, for example changing a lawful basis on which we process your personal information, we will ask you to re-consent to the amended privacy policy.
                        </p>
                        <p className="desc">
                            This policy is effective as of 2 Feburary 2024.
                        </p>
                    </div>

                </div>
            </div>

        </Layout>
    )
}
