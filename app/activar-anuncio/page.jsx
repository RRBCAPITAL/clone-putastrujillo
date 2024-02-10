import ActivarAnuncio from '@/components/ActivarAnuncio/ActivarAnuncio'

export const metadata = {
  title: "Metodos de pago - Putas en Arequipa KinesVIP",
  description: "Publica tu anuncio totalmente gratis en KinesVIP, estos son nuestros planes para activar tu anuncio.",
  metadataBase: new URL(
    "https://putasenarequipa.com/activar-anuncio" ||
      "https://www.putasenarequipa.com/activar-anuncio"
  ),
  alternates: {
    canonical: "/",
  },
};

const ActivarAnuncioPage = () => {
  
  return (
      <>
        <ActivarAnuncio />
      </>
      )
}

export default ActivarAnuncioPage