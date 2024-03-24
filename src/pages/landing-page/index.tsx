import Navbar from "@/components/shared/Navbar";
import Hero from "./Hero";
import Benifits from "./Benifits";
import Process from "./Process";
import Included from "./Included";
import Industries from "./Industries";
import Faq from "./Faq";
import Footer from "@/components/shared/Footer";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Benifits />
            <Process />
            <Included />
            <Industries />
            <Faq />
            <Footer />
        </>
    )
}
