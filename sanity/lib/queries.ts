export const SITEMAP_QUERY = `*[_type in ["page", "post", "ServiceCategory"] && defined(slug.current)] {
  "href": select(
    _type == "page" => "/" + slug.current,
    _type == "post" => "/" + slug.current,
    _type == "ServiceCategory" => "/" + slug.current,
    "/" + slug.current
  ),
  _updatedAt
}`;
