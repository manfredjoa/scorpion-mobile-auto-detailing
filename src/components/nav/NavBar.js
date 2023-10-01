"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("./Button"));
const NavBar = () => {
    return (react_1.default.createElement("nav", { className: "flex flex-col bg-black text-custom-gray text-stroke-3-black text-shadow-custom-red", style: { fontFamily: "'Germania One', cursive" } },
        react_1.default.createElement("header", { className: "flex" },
            react_1.default.createElement("img", { src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1696197217/Scorpion%20Mobile%20Auto%20Detailers/Scorpion.png", alt: "Scorpion Mobile Auto Detailers Logo", className: "absolute cursor-pointer h-20vh p-5 object-contain" }),
            react_1.default.createElement("h1", { className: "w-screen h-20vh flex justify-center items-center text-6xl" }, "SCORPION MOBILE AUTO DETAILERS")),
        react_1.default.createElement("section", { className: "flex justify-center gap-5 border-y border-y-custom-red" },
            react_1.default.createElement(Button_1.default, { to: "/pricing", text: "Pricing" }),
            react_1.default.createElement(Button_1.default, { to: "/contact", text: "Contact" }))));
};
exports.default = NavBar;
