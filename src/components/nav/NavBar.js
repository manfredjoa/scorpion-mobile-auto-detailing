"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navigation_menu_1 = require("../../@/components/ui/navigation-menu");
const NavBar = () => {
    return (react_1.default.createElement(navigation_menu_1.NavigationMenu, null,
        react_1.default.createElement(navigation_menu_1.NavigationMenuList, null,
            react_1.default.createElement(navigation_menu_1.NavigationMenuItem, null,
                react_1.default.createElement(navigation_menu_1.NavigationMenuTrigger, null, "Item One"),
                react_1.default.createElement(navigation_menu_1.NavigationMenuContent, null,
                    react_1.default.createElement(navigation_menu_1.NavigationMenuLink, null, "Link"))))));
};
exports.default = NavBar;
