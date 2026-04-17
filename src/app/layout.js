import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

export const metadata = {
  title: "KinKeeper | Meaningful Connections",
  description: "Nurture the relationships that matter most.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      suppressHydrationWarning
      className={`${geistSans.variable} font-sans h-full antialiased`}
    >
      <body className={`${geistSans.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="max-w-7xl w-full mx-auto grow px-4 lg:px-0">
          {children}
        </main>
        <Footer />
        <ToastContainer position="top-center" autoClose={3000} />
      </body>
    </html>
  );
}