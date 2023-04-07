const { Schema, model } = require("mongoose");

// Schema for what makes up a comment
const commentSchema = new Schema({
    comment: {
	type: String,
	username: User,
    //must reference the user.
    },
});

// Initialize the Comment model
const Comment = model("comment", commentSchema);

module.exports = Comment;
