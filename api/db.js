import mysql from "mysql";
export const db= mysql.createConnection({
    host:"localhost",
    user:"appAdmin",
    password:"test123",
    database:"crud",
    port:  3306

});