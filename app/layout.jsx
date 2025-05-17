import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "./components/MainNav";
import PageTransition from "./components/PageTransition";
import ReactangleTransition from "./components/ReactangleTransition";
import Gradient from "./components/Gradient";
import Header from "./components/Header";
import ScrollHint from "./components/ScrollHint";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Add this

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jatin's Portfolio",
  description: "A portfolio website showcasing my work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.variable} overflow-hidden antialiased bg-primary text-white`}
      >
        <Gradient />
        <ReactangleTransition />
        <ScrollHint />
        <PageTransition>
          <ScrollToTop /> {/* ✅ Ensures scroll to top on page change */}
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="hidden 2xl:flex w-[250px] bg-secondary flex-shrink-0">
              <MainNav />
            </div>

          {/* Main content scrollable */}
          <div className="flex-1 xl:overflow-y-hidden overflow-y-auto">
            <div className="max-w-[1130px] px-[15px] py-6 mx-auto">
              <Header className="mb-2" />
              <div>{children}</div>
              <Footer/>
            </div>
          </div>
        </div>
        </PageTransition>
      </body>
    </html>
  );
}
