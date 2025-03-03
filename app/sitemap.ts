export default async function sitemap() {
  const baseUrl = "https://arbicho.uz";

  const paths = [
    "",
    "/uzbekistan",
    "/rules",
    "/results",
    "/about",
    "/requirements",
    "/past-arbicho",
    "/future-arbicho",
    "/arbicho-foundation",
    "/gallery",
    "/organizing-committee",
    "/scientific-committee",
    "/programme-schedule",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
