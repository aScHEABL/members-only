const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    membershipStatus: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
}, { collection: "user" })

UserSchema.virtual("fullName").get(function() {
    return `${this.firstName} ${this.lastName}`;
})

UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model("user", UserSchema);