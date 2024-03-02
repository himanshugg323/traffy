import { Link } from "react-router-dom";
import Layout from "./Layout";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import "./style.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from "react";

export default function CookiesPoliciy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <div className="text-center pt-12">
                <h3 className="text-2xl font-semibold sm:text-4xl">Cookies  Policy</h3>
                <p className="mt-1 pl-1">We save tiny bits of information (cookies) on your computer to improve our service.</p>
                <Link to="/" className={cn(buttonVariants({ variant: "default", className: "capitalize mt-4" }))}>Start your free trial
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-10 py-20" >
                <div className="sm:sticky top-[100px] bg-zinc-800 max-h-[500px] flex flex-col px-6 py-4 rounded-md gap-6 w-full sm:min-w-[240px] md:min-w-[300px] pr-8 ">
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t0">Overview</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t1">What is a cookie?</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t2">Types of cookies and how we use them</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t3">Third-party cookies on our site</AnchorLink>
                    <AnchorLink offset={100} className="hover:text-purple-500" href="#t4">How you can control or opt out of cookies</AnchorLink>
                </div>

                <div className="mt-8 sm:mt-0 text-gray-400">

                    <div className="mb-12" id="t0">
                        <p className="heading">Overview</p>
                        <p className="desc">We use cookies to help improve your experience of https://www.simpletraffic.co. This cookie policy is part of Simple Traffic (Ascend Group)'s privacy policy, and covers the use of cookies between your device and our site. We also provide basic information on third-party services we may use, who may also use cookies as part of their service, though they are not covered by our policy.
                        </p>
                        <p className="desc">If you don’t wish to accept cookies from us, you should instruct your browser to refuse cookies from https://www.simpletraffic.co, with the understanding that we may be unable to provide you with some of your desired content and services.
                        </p>
                    </div>

                    <div id="t1" className="mb-12">
                        <p className="heading">What is a cookie?</p>
                        <p className="desc">
                            A cookie is a small piece of data that a website stores on your device when you visit, typically containing information about the website itself, a unique identifier that allows the site to recognise your web browser when you return, additional data that serves the purpose of the cookie, and the lifespan of the cookie itself.
                        </p>
                        <p className="mt-2">
                            Cookies are used to enable certain features (eg. logging in), to track site usage (eg. analytics), to store your user settings (eg. timezone, notification preferences), and to personalise your content (eg. advertising, language).
                        </p>
                        <p className="mt-2">Cookies set by the website you are visiting are normally referred to as “first-party cookies”, and typically only track your activity on that particular site. Cookies set by other sites and companies (ie. third parties) are called “third-party cookies”, and can be used to track you on other websites that use the same third-party service.

                        </p>
                    </div>

                    <div id="t2" className="mb-12" >
                        <p className="heading">Types of cookies and how we use them</p>
                        <div className="desc">
                            <p className="text-gray-200 text-lg">
                                Essential cookies
                            </p>
                            <p className="mt-2">
                                Essential cookies are crucial to your experience of a website, enabling core features like user logins, account management, shopping carts and payment processing. We use essential cookies to enable certain functions on our website.
                            </p>
                        </div>
                        <div className="desc">
                            <p className="text-gray-200 text-lg">
                                Performance cookies
                            </p>
                            <p className="mt-2">
                                Performance cookies are used in the tracking of how you use a website during your visit, without collecting personal information about you. Typically, this information is anonymous and aggregated with information tracked across all site users, to help companies understand visitor usage patterns, identify and diagnose problems or errors their users may encounter, and make better strategic decisions in improving their audience’s overall website experience. These cookies may be set by the website you’re visiting (first-party) or by third-party services. We use performance cookies on our site.
                            </p>
                        </div>
                        <div className="desc">
                            <p className="text-gray-200 text-lg">
                                Functionality cookies

                            </p>
                            <p className="mt-2">
                                Functionality cookies are used in collecting information about your device and any settings you may configure on the website you’re visiting (like language and timezone settings). With this information, websites can provide you with customised, enhanced or optimised content and services. These cookies may be set by the website you’re visiting (first-party) or by third-party service. We use functionality cookies for selected features on our site.
                            </p>
                        </div>
                        <div className="desc">
                            <p className="text-gray-200 text-lg">
                                Targeting/advertising cookies
                            </p>
                            <p className="mt-2">
                                Targeting/advertising cookies are used in determining what promotional content is more relevant and appropriate to you and your interests. Websites may use them to deliver targeted advertising or to limit the number of times you see an advertisement. This helps companies improve the effectiveness of their campaigns and the quality of content presented to you. These cookies may be set by the website you’re visiting (first-party) or by third-party services. Targeting/advertising cookies set by third-parties may be used to track you on other websites that use the same third-party service. We use targeting/advertising cookies on our site.

                            </p>
                        </div>

                    </div>

                    <div id="t3" className="mb-12">
                        <p className="heading">Third-party cookies on our site</p>
                        <p>
                            We may employ third-party companies and individuals on our websites—for example, analytics providers and content partners. We grant these third parties access to selected information to perform specific tasks on our behalf. They may also set third-party cookies in order to deliver the services they are providing. Third-party cookies can be used to track you on other websites that use the same third-party service. As we have no control over third-party cookies, they are not covered by Simple Traffic (Ascend Group)'s cookie policy.

                        </p>
                        <p className="text-gray-200 text-lg">
                            Our third-party privacy promise

                        </p>
                        <p className="mt-2">
                            We review the privacy policies of all our third-party providers before enlisting their services to ensure their practices align with ours. We will never knowingly include third-party services that compromise or violate the privacy of our users.
                        </p>

                    </div>
                    <div id="t4" className="mb-12">
                        <p className="heading">How you can control or opt out of cookies</p>
                        <p className="desc">
                            If you do not wish to accept cookies from us, you can instruct your browser to refuse cookies from our website. Most browsers are configured to accept cookies by default, but you can update these settings to either refuse cookies altogether, or to notify you when a website is trying to set or update a cookie.

                        </p>
                        <p className="mt-2">If you browse websites from multiple devices, you may need to update your settings on each individual device.
                        </p>
                        <p className="mt-2">
                            Although some cookies can be blocked with little impact on your experience of a website, blocking all cookies may mean you are unable to access certain features and content across the sites you visit.
                        </p>
                    </div>


                </div>
            </div>

        </Layout >
    )
}
