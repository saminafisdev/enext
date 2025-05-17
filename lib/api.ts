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
export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok || json.error) {
    throw new Error(json.message || "Registration failed");
  }

  return json;
};

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok || json.error) {
    throw new Error(json.message || "Login failed");
  }

  return json;
};

//chatbot 
export const sendChatMessage = async (message: string): Promise<string> => {
  const token = localStorage.getItem("token");

  const res = await fetch("https://enextserver.vercel.app/api/v1/assist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ question: message }),
  });

  const text = await res.text();
  console.log("✅ RAW response from API:", text);

  try {
    const data = JSON.parse(text);
    const rawReply = data.text || "🤖 No response from assistant.";
    const reply = rawReply.replace(/\\n/g, "\n").trim(); // ✅ formatting line

    if (!res.ok || data.error) {
      throw new Error(reply);
    }

    return reply;
  } catch (err) {
    throw new Error("❌ Invalid JSON response: " + text);
  }
};

