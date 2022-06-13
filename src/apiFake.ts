const controle1 = require("./assents/controle-1.png");
const controle2 = require("./assents/controle-2.png");
const headphone1 = require("./assents/headphone-1.png");
const headphone2 = require("./assents/headphone-2.png");
const headphone3 = require("./assents/headphone-3.png");
const notebook1 = require("./assents/notebook-1.png");
const notebook2 = require("./assents/notebook-2.png");
const computador1 = require("./assents/computador-1.png");
const iphone1 = require("./assents/iphone-12-1.png");

const api = {
  controle: {
    name: "controle",
    description: "Play your favorite game.",
    price: "100",
    pictures: [controle1, controle2],
  },
  fone: {
    name: "headphone",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    price: "120",
    pictures: [headphone1, headphone2, headphone3],
  },
  notebook: {
    name: "notebook",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "1300",
    pictures: [notebook1, notebook2],
  },
  computador: {
    name: "computador",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "2300",
    pictures: [computador1],
  },
  iphone: {
    name: "iphone",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    price: "4300",
    pictures: [iphone1],
  },
};

export default api;
