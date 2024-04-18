const express = require("express"); //etar maddhome tumi kichu ekta import kortecho'


const cors = require("cors");

// etar maddhome phones.json file er moddhe joto data royeche segulo ana hoye thake.
const phones = require("./phones.json");

const app = express(); //je express ta asteche eta diye tumi ekta app banaba.

const port = 3000; //port declare kora mane koto number port diye tumi server ta k calaba se port declare kora.

// eta k middleware bola hoy
app.use(cors());
//eta holo data gulo paowar ekta system
app.get("/", (req, res) => {
  res.send("my phone server comming sooon tun mun!");
});
app.get("/phones", (req, res) => {
  res.send(phones);
});
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);

  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});

// etar kaj holo port er moddhe je application ta calaccho seta bole deya mane ei app ta colteche ei port ta tee.
app.listen(
  port,
  // ei callback function ta optional tumi caile dite paro na dile oo somossa nai, tobe diba arki.
  () => {
    console.log(`My phone server is running on port : ${port}`);
  }
);
