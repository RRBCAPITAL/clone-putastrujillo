// Librerías externas
import { Suspense } from "react";
import Head from "next/head";

// Componentes locales
import Access from "@/components/Access/Access";
import Loading from "./loading";

// Estilos locales
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import { dark } from "@clerk/themes";

import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./GoogleAnalytics";
import { Quicksand } from "next/font/google";
import { Poppins } from "next/font/google";

import { DefaultSeo, NextSeo } from "next-seo";

export const metadata = {
  title: "Kinesiólogas anfitrionas en Arequipa 🙈 I kinesvip ✅",
  description:
    "Anuncios de kinesiólogas reales en el sur del Perú, kinesiólogas chibolas, kinesiólogas venezolanas, colombianas, en Arequipa, Cusco, Tacna, Apurimac, Madre de Dios, Ucayali, Junin, Ica y Moquegua",
  icons: {
    icon: ["/favicon_io/favicon.ico?v=4"],
    apple: ["/favicon_io/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon_io/apple-touch-icon.png"],
  },
  keywords: [
    "kinesiologas arequipa",
    "kinesiologas en trujillo",
    "kinesiologas arequipa los olivos",
    "kines cusco teens",
    "kinesiologas cusco y chiclayo",
    "prostitutas lima",
    "kines surco",
    "caletas lima",
    "putas peruanas",
    "putas extranjeras",
    "anfitrionas lima",
    "kinesiologas tacna",
    "kinesiologas venezolanas y colombianas",
  ],
};

const quicksand = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <>
    <NextSeo  
    canonical = "www.putasenarequipa.com/"  
    />
      <ClerkProvider
        appearance={{
          layout: {
            // helpPageUrl: "https://clerk.com/support",
            // logoImageUrl: "https://clerk.com/logo.png",
            // logoPlacement: "inside",
            // privacyPageUrl: "https://clerk.com/privacy",
            showOptionalFields: false,
            socialButtonsPlacement: "top",
            socialButtonsVariant: "iconButton",
            // termsPageUrl: "https://clerk.com/terms",
          },
          variables: {
            // colorPrimary: "#febd57",
            // colorBackground: "#fff9e6",
            // colorText: "black",
            // fontFamily: "Nunito"
          },
        }}
        localization={esES}
      >
        <html lang="es" className={quicksand.className}>
          <body className="w-screen overflow-x-hidden">
            <GoogleAnalytics />
            <Suspense fallback={<Loading />}>
              <Access children={children} />
            </Suspense>
            <Analytics />
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
