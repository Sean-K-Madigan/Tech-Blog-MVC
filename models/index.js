const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Error = require('./Error');

// Define the relationships between the models

// A user can have more than one post
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// A post can only have one user (creator)
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// A user can have more than one comment
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// A comment can only have one user (creator)
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// A post can have more than one comment
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// A comment can only have one post
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// A user can have more than one error
User.hasMany(Error, {
  foreignKey: 'user_id',
});

// An instance of an error can only have one associated user
Error.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post, Comment, Error };