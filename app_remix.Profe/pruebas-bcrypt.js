const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const valid = await bcrypt.compare(password, hashedPassword);
  console.log("es válida?", valid);
}

hashPassword("1234");
