"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CardGroup_1 = __importDefault(require("./CardGroup"));
const Pricing = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "Pricing"),
        react_1.default.createElement(CardGroup_1.default, null)));
};
exports.default = Pricing;
