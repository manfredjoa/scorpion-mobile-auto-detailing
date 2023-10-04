"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card = ({ type, price, services, addOns }) => {
    return (react_1.default.createElement("article", { className: "card w-[25vw] h-[30vw] border border-custom-red bg-black text-custom-gray" },
        react_1.default.createElement("header", { className: "card-title flex justify-center items-center h-1/5 rounded-t-xl bg-custom-red text-black text-2xl" }, type),
        react_1.default.createElement("main", { className: "p-4" },
            react_1.default.createElement("h1", null, price),
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("h2", null, "Services"),
                react_1.default.createElement("ul", null, services.map((service, index) => (react_1.default.createElement("li", { key: index }, service))))),
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("h2", null, "Add Ons"),
                react_1.default.createElement("ul", null, addOns.map((addOn, index) => (react_1.default.createElement("li", { key: index }, addOn))))))));
};
exports.default = Card;
