const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

User.hasMany(Post, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
});
User.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});
Post.belongsTo(User, {
  foreignKey: "author_id",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});
Comment.belongsTo(User, {
  foreignKey: "author_id",
});
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = {User, Post, Comment};