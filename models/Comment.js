type: DataTypes.STRING,
allowNull: false,
},
date_created: {
type: DataTypes.DATE,
allowNull: false,
defaultValue: DataTypes.NOW,
},
user_id: {
type: DataTypes.INTEGER,
references: {
model: 'user',
Comment.init(
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'comment',
}
);