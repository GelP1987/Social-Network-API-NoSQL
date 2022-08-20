const userSchema = new Schmema(
{
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      "Please fill a valid email address",
    ],
    },
    thoughts: {
        postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'thought-model'
    }
    },
    friends: {
        postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

    }
})

