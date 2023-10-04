"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Contact_1 = __importDefault(require("../../components/contact/Contact"));
const ContactPage = () => {
    return (react_1.default.createElement("section", null,
        react_1.default.createElement(Contact_1.default, null)));
};
exports.default = ContactPage;
