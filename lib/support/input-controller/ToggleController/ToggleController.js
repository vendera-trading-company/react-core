"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleController = void 0;
const Controller_1 = __importDefault(require("../Controller"));
class ToggleController extends Controller_1.default {
    toggle() {
        this.setValue(!this.value);
        return this;
    }
}
exports.ToggleController = ToggleController;
exports.default = ToggleController;
