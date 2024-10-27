import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import { ModalProvider } from "./context/modalContext";
import { LanguageProvider } from "./context/languageContext";
import { LoaderProvider } from "./context/loaderContext";
import Loader from "./components/loader";

import { Inter } from 'next/font/google';

import Image from "next/image";
import blob from "./blob.svg";
import blob2 from "./blob-2.svg";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Modal from "./components/modal";
import ProjectModal from "./components/projectModal";

import LenisScroll from "./components/lenisScroll";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Adrian Morbán",
  description: "Adrian Morban's professional portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <LoaderProvider>
          <Loader />
          <LanguageProvider>
            <ModalProvider>
              <LenisScroll />
              <Navbar />
              <main className="bg-black relative z-10">
                <div className="overlay pointer-events-none fixed lg:sticky">
                  <Image className="blur-[100px] lg:blur-[200px] lg:w-[75%] lg:opacity-30 absolute -top-[5%] -left-[10%] lg:-top-[55%] lg:-left-[35%]" src={blob} alt="Blob" />
                  <Image className="blur-[100px] lg:blur-[200px] lg:w-[75%] lg:opacity-20 absolute -bottom-[5%] -right-[10%] lg:-bottom-[55%] lg:-right-[40%]" src={blob2} alt="Blob" />
                </div>
                <div className="lg:-mt-[100vh]">
                  {children}
                </div>
              </main>
              <Modal />
              <ProjectModal />
              <Footer />
            </ModalProvider>
          </LanguageProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
