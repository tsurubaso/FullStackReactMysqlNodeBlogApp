import { db } from "../db.js";

export const register = (req, res) => {
  //check existing user

  const q = "SELECT * FROM users WHERE email=? OR username=?";

  db.query(q, [req.body.email.req.body.name], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create the user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users ('username', 'email', 'password') VALUES (?)";
    const values = [req.body.username, req.bcrypt.email, hash];

db.query(q, [values], (err,data) => {
    if (err) return res.json(err);
    return res.status(200).json("user has been created.")


});

  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
