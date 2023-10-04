"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card_1 = __importDefault(require("./Card"));
const addOnData = {
    services: [
        "Tire Shine",
        "Pet Hair Removal",
        "Bug & Tar Removal",
        "Fabric Seat Shampoo",
        "Leather Seat Conditioner",
    ],
};
const cardData = [
    {
        type: "Striped Tail Scorpion Package",
        price: "$160 Sedan | $210 SUV",
        services: [
            "Interior Carpet & Upholstery Vacuum",
            "Exterior Hand Wash",
            "Rim and Tire Wash",
            "Microfiber Towel Dry",
        ],
        addOns: addOnData.services,
    },
    {
        type: "Emperor Scorpion Package",
        price: "$190 Sedan | $240 SUV",
        services: [
            "Interior Carpet & Upholstery Vacuum",
            "Exterior Hand Wash",
            "Rim and Tire Wash",
            "Spray Ceramic Wax",
            "Handheld Blow Dry",
        ],
        addOns: addOnData.services,
    },
];
const CardGroup = () => {
    return (react_1.default.createElement("section", { className: "flex justify-evenly" }, cardData.map((data, index) => (react_1.default.createElement(Card_1.default, { key: index, type: data.type, price: data.price, services: data.services, addOns: data.addOns })))));
};
exports.default = CardGroup;
