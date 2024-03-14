import { PhoneCall } from "lucide-react"
import { Link } from "react-router-dom"

const FooterLinks = [
    {
        title: "Help and advice", links: [
            { link: "How to Cancle", path: "/how-to-cancel" },
            { link: "Guides", path: "/" },
            { link: "Help Center", path: "/help" },
            { link: "Request a refund", path: "/request-refund" },
        ]
    },
    {
        title: "More Info",
        links: [
            { link: "Terms of Service", path: "/terms-of-service" },
            { link: "Privacy Policy", path: "/privacy-policy" },
            { link: "Cookies Policy", path: "/cookies-policy" },
            { link: "Refund Policy", path: "/refund-policy" },
            { link: "Become an affiliate", path: "/" },
        ]
    },
]

export default function Footer() {
    return (
        <footer className="rounded-xl border ">
            <div className="max-w-6xl mx-auto space-y-16 px-3 sm:px-6 py-16 text-gray-600 2xl:px-0">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8 ">
                    <Link to="/" aria-label="tailus logo">
                        <img src="/logo.png" className="w-[120px]" />
                    </Link>
                    <div className="flex gap-3">
                        <Link to="" target="blank" aria-label="github" className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>

                        </Link>
                        <Link to="" target="blank" aria-label="twitter" className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                            </svg>
                        </Link>
                        <Link to="" target="blank" aria-label="medium" className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" /></svg>
                        </Link>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-3">
                    <div className="text-gray-300 flex flex-col gap-1">
                        <img src="/logo.png" alt="traffiy" className="w-[120px]" />
                        <p>Ascend Group 16090525</p>
                        <p>Keemia tn 4, Tallinn 10616 Estonia</p>
                        <div className="flex items-center gap-2 pt-2">
                            <PhoneCall className="w-5" />
                            <span> +91 9876543210</span>
                        </div>
                    </div>
                    {/* <div>

                        <span className="text-sm font-medium text-gray-950 dark:text-white">{FooterLinks[0].title}</span>
                        <ul className="mt-4 list-inside space-y-4">
                            {
                                FooterLinks[0].links.map((e, index) => (
                                    <li key={index}>
                                        <Link to={e.path} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">{e.link}</Link>
                                    </li>

                                )
                                )
                            }
                        </ul>
                    </div> */}
                    <div>
                        <span className="text-sm font-medium text-gray-950 dark:text-white">{FooterLinks[1].title}</span>
                        <ul className="mt-4 list-inside space-y-4">
                            {
                                FooterLinks[1].links.map((e, index) => (
                                    <li key={index}>
                                        <Link to={e.path} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">{e.link}</Link>
                                    </li>

                                )
                                )
                            }
                        </ul>
                    </div>

                </div>
                <div className="flex items-center justify-between flex-wrap rounded-md bg-gray-100 px-2 sm:px-6 py-3 dark:bg-gray-900">
                    <span className="text-gray-600 dark:text-gray-400">&copy; SimpleTraffic - 2021 Ascend Group </span>
                    <Link to="#" className="text-sm pt-4 sm:pt-0 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"> All rights reserved.</Link>
                </div>
            </div >
        </footer >
    )
}
