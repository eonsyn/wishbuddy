// app/api/rss/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const host = process.env.HOST_URL || "https://wishbuddy.netlify.app";
  const res = await fetch(`${host}/api/blog/save-article`);
  const data = await res.json();
  const articles = data.articles || [];

  const items = articles
    .map(
      (a) => `
      <item>
        <title><![CDATA[${a.title}]]></title>
        <link>${host}/blog/${a.slug}</link>
        <description><![CDATA[${a.description || a.excerpt || ""}]]></description>
        <pubDate>${new Date(a.createdAt).toUTCString()}</pubDate>
        <guid>${host}/blog/${a.slug}</guid>
      </item>`
    )
    .join("");

  const xml = `
    <rss version="2.0">
      <channel>
        <title>Wish Buddy Blog</title>
        <link>${host}</link>
        <description>Latest blogs from Wish Buddy</description>
        ${items}
      </channel>
    </rss>
  `;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
