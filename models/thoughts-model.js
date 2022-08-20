const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema (
{
    thoughtText: {
    type: String,
    required: true,
    match: [
 /^([.]+{1,280})$/,
"Please enter a thought between 1-280 characters"
    ],
},
createdAt: {
    type: Date,
      default: Date.now,
},
username: {
    type: String,
    required: true,
},
reactions: [],
}
);
reactionSchema.virtual('reactionCount').get(function() {
  return this.reaction.length;
});