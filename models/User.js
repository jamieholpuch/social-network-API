const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true, trim: true},
        email: { 
            type: String, 
            required: true, 
            unique: true, 
            trim: true, 
            // validate: [validateEmail, 'Please fill a valid email address']
        },
        thoughts: [
           {
            type: Schema.Types.ObjectId,
            ref: 'thought',
           },
        ],
        friends: [
            {type: Schema.Types.ObjectId,
            ref: 'user',
            },
        ],
    },
    {toJSON: {
        virtuals: true,
    },
    id: false, 
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return friends.length
    });

const User = model('user', userSchema);

module.exports = User; 
