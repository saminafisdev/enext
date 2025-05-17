const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
}

export async function filteredProducts(query: string) {
  const response = await fetch(
    `${BASE_URL}/products/search-product?search=${query}`
  );

  return response.json();
}
