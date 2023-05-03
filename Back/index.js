const server = require("./src/app");
const { conn } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 4000, () => {
    console.log(`server ready en el puerto ${process.env.PORT || 4000}`);
  });
});
