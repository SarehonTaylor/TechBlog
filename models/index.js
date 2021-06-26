const User = require('./User');
const Project = require('./Commnet');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });

module.exports = { User, Project };