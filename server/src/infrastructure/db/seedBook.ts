import db from "./database";

const seedBooks = () => {
  const books: any = [
    {
      title: "The Great Gatsby",
      isbn: "978-3-16-148410-0",
      author: "F. Scott Fitzgerald",
      publisher: "Scribner",
      category: "Classic",
      rack: "A1",
      noOfCopy: 5,
      updatedOn: "2025-02-25T00:00:00Z",
    },
    {
      title: "To Kill a Mockingbird",
      isbn: "978-0-06-112008-4",
      author: "Harper Lee",
      publisher: "J.B. Lippincott & Co.",
      category: "Fiction",
      rack: "A2",
      noOfCopy: 3,
      updatedOn: "2025-02-25T00:00:00Z",
    },
    {
      title: "1984",
      isbn: "978-0-452-28423-4",
      author: "George Orwell",
      publisher: "Secker & Warburg",
      category: "Dystopian",
      rack: "B1",
      noOfCopy: 7,
      updatedOn: "2025-02-25T00:00:00Z",
    },
    {
      title: "The Catcher in the Rye",
      isbn: "978-0-316-76948-0",
      author: "J.D. Salinger",
      publisher: "Little, Brown and Company",
      category: "Fiction",
      rack: "A3",
      noOfCopy: 4,
      updatedOn: "2025-02-25T00:00:00Z",
    },
    {
      title: "Pride and Prejudice",
      isbn: "978-1-85326-000-1",
      author: "Jane Austen",
      publisher: "T. Egerton",
      category: "Romance",
      rack: "B2",
      noOfCopy: 6,
      updatedOn: "2025-02-25T00:00:00Z",
    },
  ];

  const insertStmt = db.prepare(
    "INSERT INTO books (title, isbn, author, publisher, category, rack, noOfCopy, updatedOn) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  );

  const insertMany = db.transaction((books: any[]) => {
    for (const book of books)
      insertStmt.run(
        book.title,
        book.isbn,
        book.author,
        book.publisher,
        book.category,
        book.rack,
        book.noOfCopy,
        book.updatedOn
      );
  });

  insertMany(books);
  console.log(`Seeding complete.`);
};

seedBooks();
