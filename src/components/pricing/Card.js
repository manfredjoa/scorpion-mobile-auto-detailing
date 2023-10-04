"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card = ({ type, price, services, addOns }) => {
    return (react_1.default.createElement("article", { className: "card flex flex-col w-[25vw] h-[30vw] border border-custom-red bg-black text-custom-gray" },
        react_1.default.createElement("header", { className: "card-title flex justify-center items-center h-1/6 rounded-t-xl bg-custom-red text-black text-2xl" }, type),
        react_1.default.createElement("main", { className: "grow p-4" },
            react_1.default.createElement("ul", { className: "text-sm" }, services.map((service, index) => (react_1.default.createElement("li", { key: index }, service)))),
            react_1.default.createElement("br", null),
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("h2", { className: "text-md" }, "Add Ons:"),
                react_1.default.createElement("ul", { className: "text-sm" }, addOns.map((addOn, index) => (react_1.default.createElement("li", { key: index }, addOn)))))),
        react_1.default.createElement("footer", { className: "justify-end h-[12.5%] rounded-b-xl bg-custom-gray border border-custom-red text-black text-lg" },
            react_1.default.createElement("h2", { className: "flex items-center justify-center h-full" }, price))));
};
exports.default = Card;
