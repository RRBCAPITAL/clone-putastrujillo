import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Inicio from "@/components/Inicio/Inicio";
import { NextSeo } from "next-seo";

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
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://putasenarequipa.com/' || 'https://www.putasenarequipa.com/'),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "RRB CAPITAL" }],
  publisher: 'RRB CAPITAL',
};

export default function Home() {
  return (
    <>
      <main className="dark:bg-dark-l bg-white flex">
        <Inicio />
      </main>
    </>
  );
}
