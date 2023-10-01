"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Button = ({ to, text }) => {
    return (react_1.default.createElement(react_router_dom_1.Link, { to: to, className: "flex items-center p-2 text-4xl text-stroke-2-black" }, text));
};
exports.default = Button;
