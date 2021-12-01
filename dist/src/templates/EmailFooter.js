"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailFooter = void 0;
var react_1 = __importDefault(require("react"));
// @ts-ignore
var react_html_email_1 = require("react-html-email");
var EmailLink_1 = require("./EmailLink");
var TextDivider = function () { return react_1.default.createElement(react_1.default.Fragment, null, "\u00A0\u00B7\u00A0"); };
var EmailFooter = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_html_email_1.Item, { style: { height: 20 } }),
        react_1.default.createElement(react_html_email_1.Item, { align: "center" },
            react_1.default.createElement(react_html_email_1.Span, { color: "rgb(117, 128, 140)", fontSize: 14, style: { lineHeight: 1.4 } }, "145 Talmadge Rd, Edison, NJ 08817, United States")),
        react_1.default.createElement(react_html_email_1.Item, null,
            react_1.default.createElement(react_html_email_1.Span, { color: "rgb(117, 128, 140)", fontSize: 14, style: { lineHeight: 1.4 } }, "\u00A9 OneShip, 2021")),
        react_1.default.createElement(react_html_email_1.Item, { align: "center" },
            react_1.default.createElement(react_html_email_1.Span, { color: "rgb(117, 128, 140)", fontSize: 14, style: { lineHeight: 1.4 } },
                react_1.default.createElement(EmailLink_1.EmailLink, { href: "" }, "Unsubscribe"))),
        react_1.default.createElement(react_html_email_1.Item, { style: { height: 45 } })));
};
exports.EmailFooter = EmailFooter;
