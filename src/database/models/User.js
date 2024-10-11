import { connection } from "../connection.js";

const UserSchema = new connection.Schema({
    username: String,
    password: String,
    dateOfBirth: Date,
});

const User = connection.model('users', UserSchema);

export default User;