"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card_1 = __importDefault(require("./Card"));
const cardData = [
    {
        type: "Striped Tail Scorpion Package",
        description: "description 1",
    },
    {
        type: "Emperor Scorpion Package",
        description: "description 2",
    },
];
const CardGroup = () => {
    return (react_1.default.createElement("section", { className: "flex justify-evenly" }, cardData.map((data, index) => (react_1.default.createElement(Card_1.default, { key: index, type: data.type, description: data.description })))));
};
exports.default = CardGroup;
