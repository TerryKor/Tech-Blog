const { Post } = require("../models");

const postData = [
  {
    title: "Tailwind CSS",
    content: "Tailwind CSS works by scanning all of your HTML files,JavaScript components, and any other templates for class names, generating the the corresponding styles and then writing them to a static CSS file.",
    author_id:1,
  },
  {
    title: "Sequelize",
    content: "Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.",
    author_id:2,
  },
  {
    title: "Express",
    content: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    author_id:1,
  },
  {
    title: "MySQL2",
    content: "MySQL2 project is a continuation of MySQL-Native. Protocol parser code was rewritten from scratch and api changed to match popular mysqljs/mysql. MySQL2 team is working together with mysqljs/mysql team to factor out shared code and move it under mysqljs organisation.",
    author_id:2,
  },
  {
    title: "React",
    content: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies",
    author_id:1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;