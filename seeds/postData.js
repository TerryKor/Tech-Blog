const { Post } = require("../models");

const postData = [
  {
    title: "Tailwind CSS",
    post_content: "Tailwind CSS works by scanning all of your HTML files,JavaScript components, and any other templates for class names, generating the the corresponding styles and then writing them to a static CSS file."
  },
  {
    title: "Sequelize",
    post_content: "Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more."
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;