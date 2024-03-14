import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/lib/theme-provider";
import LandingPage from "@/pages/landing-page";
import TermsOfService from "@/pages/tos/TermsOfService";
import PrivacyPolicy from "@/pages/tos/PrivacyPolicy";
import CookiesPoliciy from "@/pages/tos/CookiesPolicy";
import RefundPolicy from "@/pages/tos/RefundPolicy";
import Contact from "./pages/contact/contact";


export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/cookies-policy" element={<CookiesPoliciy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}
