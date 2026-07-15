import AppContext from "@/components/contexts";
import { ToastContainer } from "@/components/molecures";
import Modal from "@/components/molecures/modal";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ThemeProvider } from "@/components/contexts/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://codezx.vn"),
  title: "CodeZX - Digital Transform Solution",
  description:
    "Tech solutions for your business. We provide services with care for any of your tech-related needs.",
  icons: "./favicon.ico",
  verification: {
    google: "rKE3kMaIb_WWBLz17HE3DcxyuHXDZAAJR-t5zbnnigI",
  },
  openGraph: {
    url: "https://codezx.vn",
    title: "CodeZX - Digital Transform Solution",
    description:
      "Tech solutions for your business. We provide services with care for any of your tech-related needs.",
    images: {
      url: "/logo-single.svg",
      width: 800,
      height: 800,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <AppContext>
            <>
              <div className="app-bg-decor" />
              <Modal />
              {children}
              <ToastContainer />
            </>
          </AppContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
