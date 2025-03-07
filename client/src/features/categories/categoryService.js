const GET_CATEGORIES = import.meta.env.VITE_API_GET_ALL_CATEGORIES;

export const getCategories = async () => {
  try {
    const response = await fetch(`${GET_CATEGORIES}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
