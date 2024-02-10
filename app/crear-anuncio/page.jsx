import CrearAnuncio from "@/components/FormCreates/Anuncios/CrearAnuncio"

export const metadata = {
  title: "Publicar Anuncio - Putas en Arequipa KinesVIP",
  description: "Publica tu anuncio totalmente gratis en KinesVIP.",
  metadataBase: new URL(
    "https://putasenarequipa.com/crear-anuncio" ||
      "https://www.putasenarequipa.com/crear-anuncio"
  ),
  alternates: {
    canonical: "/",
  },
};

const CrearAnuncioPage = () => {
  return (
    <>
        <CrearAnuncio />
    </>
  )
}

export default CrearAnuncioPage;