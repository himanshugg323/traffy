import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/lib/theme-provider";
import LandingPage from "@/pages/landing-page";
import TermsOfService from "@/pages/tos/TermsOfService";
import PrivacyPolicy from "@/pages/tos/PrivacyPolicy";
import CookiesPoliciy from "@/pages/tos/CookiesPolicy";
import RefundPolicy from "@/pages/tos/RefundPolicy";
import Contact from "@/pages/contact/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "terms-of-service",
    element: <TermsOfService />
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "cookies-policy",
    element: <CookiesPoliciy />
  },
  {
    path: "refund-policy",
    element: <RefundPolicy />
  },

]);

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
