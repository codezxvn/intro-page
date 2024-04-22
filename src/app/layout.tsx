import AppContext from "@/components/contexts";
import { ToastContainer } from "@/components/molecures";
import Modal from "@/components/molecures/modal";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://codezx.vn"),
  title: "CodeZX - Digital Transform Solution",
  description:
    "Tech solution for you bussines, we providing services with our cares for any of your business tech related needs.",
  icons: "./favicon.ico",
  verification: {
    google: "MGMqyXIdYCBujOWe45OEPHnwbsE2SDbWxt29cewWsgg",
  },
  openGraph: {
    url: "codezx.vn",
    title: "CodeZX - Digital Transform Solution",
    description:
      "Tech solution for you bussines, we providing services with our cares for any of your business tech related needs.",
    images: {
      url: "./logo-single.svg",
      width: 800,
      height: 800,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <AppContext>
            <>
              <Modal />
              {children}
              <ToastContainer />
            </>
          </AppContext>
        </body>
      </html>
    </>
  );
}
