const GET_ALL_BOOKS = import.meta.env.VITE_API_GET_ALL_BOOKS;

export const getBooks = async () => {
  try {
    const response = await fetch(GET_ALL_BOOKS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async () => {};

export const createBook = async () => {};

export const updateBook = async () => {};

export const deleteBook = async () => {};
