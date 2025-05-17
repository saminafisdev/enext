const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
}

export async function getProductDetails(slug: string) {
  console.log(`${BASE_URL}/products/slug?slug=${slug}`);
  const response = await fetch(`${BASE_URL}/products/slug?slug=${slug}`);
  return response.json();
}

export async function filteredProducts(query: string) {
  const response = await fetch(
    `${BASE_URL}/products/search-product?search=${query}`
  );

  return response.json();
}

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}
