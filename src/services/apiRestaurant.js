const baseURL = import.meta.env.VITE_API_BASE_URL;

async function getMenu() {
  try {
    const res = await fetch(`${baseURL}/menu`);
    if (!res.ok)
      throw new Error(`There was an error ${res.status}: ${res.statusText}`);

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export { getMenu };
