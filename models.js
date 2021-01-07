const mysql2= require ("mysql2");
  const db= mysql2.createconnection({
      user: "root",
      host: "loaclhost",
      password: "required",
      database: "fakedatabase"    ,
    })