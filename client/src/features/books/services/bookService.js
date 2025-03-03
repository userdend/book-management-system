const GET_ALL_BOOKS = import.meta.env.VITE_API_GET_ALL_BOOKS;
const GET_BOOK = import.meta.env.VITE_API_GET_BOOK;
const ADD_BOOK = import.meta.env.VITE_API_ADD_BOOK;

export const getBooks = async (page) => {
  try {
    const response = await fetch(`${GET_ALL_BOOKS}?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getBook = async (id) => {
  try {
    const response = await fetch(`${GET_BOOK}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createBook = async (user, book) => {
  try {
    const response = await fetch(`${ADD_BOOK}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          id: user.id,
        },
        book: book,
      }),
    });
    const status = await response.json();
    return status;
  } catch (error) {
    console.error(error);
  }
};

export const updateBook = async () => {};

export const deleteBook = async () => {};
