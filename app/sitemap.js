import { connectDB } from "@/lib/mongodb";
import Article from '@/models/Article';

export const dynamic = 'force-dynamic';

export default async function sitemap() {
  try {
    await connectDB();

    const articles = await Article.find({ isPublished: true }).select('slug');

    const baseUrl = 'https://wishbuddy.netlify.app';

    const staticRoutes = [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      }, 
    ];

    const blogRoutes = articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch (err) {
    console.error("Error generating sitemap:", err);
    return []; // fallback, sitemap won't break
  }
}
