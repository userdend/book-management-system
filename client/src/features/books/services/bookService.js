const GET_ALL_BOOKS = import.meta.env.VITE_API_GET_ALL_BOOKS;
const GET_BOOK = import.meta.env.VITE_API_GET_BOOK;

export const getBooks = async (page) => {
  try {
    const response = await fetch(`${GET_ALL_BOOKS}?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async (id) => {
  try {
    const response = await fetch(`${GET_BOOK}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createBook = async () => {};

export const updateBook = async () => {};

export const deleteBook = async () => {};
