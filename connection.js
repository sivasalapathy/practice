const connection=require("./db");
//test db
const dbSync = () => connection
    .sync(() => "connnection created....."));

.catch((err) => console.log(err));

;

module. exports= connection;