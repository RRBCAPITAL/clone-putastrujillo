export default function sitemap() {

  const currentDate = new Date().toISOString();

    return [
      {
        url: 'https://putasenarequipa.com/',
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://putasenarequipa.com/crear-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://putasenarequipa.com/activar-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://putasenarequipa.com/sign-in',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://putasenarequipa.com/sign-up',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
      }
    ]
  }