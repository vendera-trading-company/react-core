"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApplication = void 0;
const React = __importStar(require("react"));
const Application_1 = require("../components/Application/Application");
function useApplication() {
    const application = React.useContext(Application_1.ApplicationContext);
    if (application === undefined) {
        throw new Error("Couldn't find a application object. Is your component inside ApplicationProvider?");
    }
    if (application) {
        return application;
    }
    // FIXME: Figure out a better way to do this
    return application;
}
exports.useApplication = useApplication;
exports.default = useApplication;
