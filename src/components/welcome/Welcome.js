"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Welcome = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const navigateHome = () => navigate("/home");
    return (react_1.default.createElement("img", { src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1696181111/Scorpion%20Mobile%20Auto%20Detailers/Scorpion%20Logo.png", className: "h-screen object-contain m-auto cursor-pointer hover:scale-125 transition duration-700 ease-in-out", onClick: navigateHome }));
};
exports.default = Welcome;
