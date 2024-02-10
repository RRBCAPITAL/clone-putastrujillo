export default function sitemap() {

  const currentDate = new Date().toISOString();

    return [
      {
        url: 'https://putasenarequipa.com/',
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1,
      },
    ]
  }