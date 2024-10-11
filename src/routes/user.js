import { Router } from "express";
import bcrypt from "bcrypt"

import User from "../database/models/User.js";

const user = Router();

user.get('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({
            message: "Not found"
        })
    
        res.json(user);
    } catch(e) {
        res.status(500).json(e);
    }
});

user.post('/', async (req, res) => {
    let body = req.body;
    try {
        const user = new User();

        user.username = body.username;
        user.password = bcrypt.hashSync(body.password, 8);
        user.dateOfBirth = body.dateOfBirth;

        await user.save();
        res.json(user);
    } catch(e) {
        console.log(e);
        res.status(500).json(e);
    }

});

export default user;