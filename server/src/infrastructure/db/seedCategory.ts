import db from "./database";

const seedCategories = () => {
  const categories: any = [
    { name: "Classic" },
    { name: "Fiction" },
    { name: "Dystopian" },
    { name: "Romance" },
  ];

  const insertStmt = db.prepare("INSERT INTO categories (name) VALUES (?)");

  const insertMany = db.transaction((categories: any[]) => {
    for (const category of categories) insertStmt.run(category.name);
  });

  insertMany(categories);
  console.log(`Seeding complete.`);
};

seedCategories();
