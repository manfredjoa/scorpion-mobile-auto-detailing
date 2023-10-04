"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Pricing_1 = __importDefault(require("../../components/pricing/Pricing"));
const PricingPage = () => {
    return (react_1.default.createElement("main", null,
        react_1.default.createElement(Pricing_1.default, null)));
};
exports.default = PricingPage;
