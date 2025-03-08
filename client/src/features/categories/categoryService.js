const GET_CATEGORIES = import.meta.env.VITE_API_GET_ALL_CATEGORIES;
const GET_CATEGORY = import.meta.env.VITE_API_GET_CATEGORY;
const ADD_CATEGORIES = import.meta.env.VITE_API_ADD_CATEGORIES;
const UPDATE_CATEGORY = import.meta.env.VITE_API_UPDATE_CATEGORY;

const user = { id: 1 };

export const getCategories = async () => {
  try {
    const response = await fetch(`${GET_CATEGORIES}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategory = async (id) => {
  try {
    const response = await fetch(`${GET_CATEGORY}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createCategory = async (category) => {
  try {
    const response = await fetch(`${ADD_CATEGORIES}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          id: user.id,
        },
        category: category,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateCategory = async (category) => {
  try {
    const response = await fetch(`${UPDATE_CATEGORY}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          id: user.id,
        },
        category: category,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
