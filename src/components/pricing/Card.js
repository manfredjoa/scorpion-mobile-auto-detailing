"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card = ({ type, description }) => {
    return (react_1.default.createElement("div", { className: "card w-[33vw] bg-base-100 shadow-xl" },
        react_1.default.createElement("div", { className: "card-body" },
            react_1.default.createElement("h2", { className: "card-title" }, type),
            react_1.default.createElement("p", null, description),
            react_1.default.createElement("div", { className: "card-actions justify-end" },
                react_1.default.createElement("button", { className: "btn btn-primary" }, "Buy Now")))));
};
exports.default = Card;
