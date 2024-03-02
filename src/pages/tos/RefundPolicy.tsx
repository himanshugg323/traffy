import Layout from "./Layout";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function RefundPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <div className="text-center pt-12">
                <h3 className="text-2xl font-semibold sm:text-4xl">Refund Policy</h3>
                <p className="mt-1 pl-1">For peace of mind we offer a free trial and a 30 day money back guarantee.</p>
                <AnchorLink href="/" className={cn(buttonVariants({ variant: "default", className: "capitalize mt-4" }))}>Request a refund below
                </AnchorLink>
            </div>
            <div className="mt-12 text-gray-400">
                <div className="mb-12">
                    <p className="heading">Important</p>
                    <p className="desc">
                        If you choose to request a refund for any reason other than technical issues or delivery issues with our service, you will not be able to order from us again as we only offer a single service. Before requesting a refund please <Link to="/contact"> contact us </Link>  about any issues you have so we can try to help you. Most issues can be resolved within a single message.
                    </p>
                </div>
                <div className="mb-12">
                    <p className="heading">30 Day Money Back Guarantee</p>
                    <p className="desc">
                        Your most recent payment qualifies for the 30 Day Money Back Guarantee. If you are unhappy with our service you have 30 days after signing up to cancel and receive a full refund of your latest payment. To cancel your subscription and request a refund please contact our customer support by clicking the button below.
                    </p>
                    <p className="desc">
                        If you have multiple subscriptions then only the subscription with the most recent payment qualifies for our money back guarantee, so please make sure our traffic is right for you before signing up for multiple subscriptions.

                    </p>
                </div>
                <div className="mb-12">
                    <p className="heading">Refund Policy</p>
                    <p className="desc">
                        At any time you may choose to cancel your subscription. If you are unhappy with the service we provided you may be entitled to a refund of your latest payment. To request this refund please contact our customer support using the button below and let us know why you would like a refund so that we can investigate any problems you may be having and offer solutions or a refund.
                    </p>
                    <Link to="/" className={cn(buttonVariants({ variant: "destructive", className: "mt-5" }))}>Request Refund</Link>
                </div>
            </div>
        </Layout>
    )
}
