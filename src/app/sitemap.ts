import { MetadataRoute } from "next";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";
import { client } from "@/sanity/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths = await client.fetch(SITEMAP_QUERY);

    const baseUrl =
      process.env.VERCEL && process.env.VERCEL_ENV === "production"
        ? "https://diagnosticscenter.co.in/"
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000";

    const dynamicPaths = paths.map(
      (path: { href: string; _updatedAt: string }) => ({
        url: new URL(path.href!, baseUrl).toString(),
        lastModified: new Date(path._updatedAt),
        changeFrequency: "weekly",
        priority: 1,
      })
    );

    const oldUrls = [
      "/",
      "/pathology-test-in-bangalore",
      "/ultrasound-scan-in-bangalore",
      "/x-ray-test-in-bangalore",
      "/doppler-scan-in-bangalore",
      "/cardiology-test-in-bangalore",
      "/ecg-test-in-bangalore",
      "/echo-test-in-bangalore",
      "/tmt-test-in-bangalore",
      "/radiological-procedures-in-bangalore",
      "/diabetologist-consultant-in-bangalore",
      "/gynaecologist-consultant-in-bangalore",
      "/cardiologist-consultant-in-bangalore",
      "/neurology-consultation-in-bangalore",
      "/obstetrics-consultation-in-bangalore",
      "/gastroenterology-consultation-in-bangalore",
      "/urology-consultation-in-bangalore",
      "/health-packages-in-bangalore",
      "/about-us",
      "/contact-us",
      "/blog",
      "/diagnostics-center-in-bannerghatta-road",
      "/diagnostics-center-in-bommanahalli",
      "/diagnostics-center-in-hsr-layout",
      "/diagnostics-center-in-jp-nagar",
      "/diagnostics-center-in-kalyan-nagar",
      "/diagnostics-center-in-magadi-road",
      "/diagnostics-center-in-vijaynagar",
      "/diagnostics-center-in-whitefield",
      "/diagnostics-center-in-yelahanka",
      "/diagnostics-center-in-ulsoor",
      "/diagnostics-center-in-jayanagar",
      "/diagnostics-center-in-btm-layout",
      "/diagnostics-center-in-varthur",
      "/diagnostics-center-in-banashankari",
      "/diagnostics-center-in-bellandur",
      "/diagnostics-center-in-hebbal",
      "/diagnostics-center-in-fraser-town",
      "/diagnostics-center-in-basaveshwara-nagar",
      "/diagnostics-center-in-devanahalli",
      "/diagnostics-center-in-vivek-nagar",
      "/diagnostics-center-in-laggere",
      "/diagnostics-center-in-kr-puram",
    ].map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: new Date("2024-12-31"), // or best guess
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    return [...dynamicPaths, ...oldUrls];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
