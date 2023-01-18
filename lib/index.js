"use strict";
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable lines-between-class-members */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedLine = exports.TextInput = exports.Collection = exports.Model = exports.ToggleController = exports.TextController = exports.Controller = exports.BaseView = exports.ApplicationContext = exports.Application = exports.useApplication = exports.useView = void 0;
/** Import Components */
const BaseView_1 = require("./components/BaseView/BaseView");
Object.defineProperty(exports, "BaseView", { enumerable: true, get: function () { return BaseView_1.BaseView; } });
const Application_1 = require("./components/Application/Application");
Object.defineProperty(exports, "Application", { enumerable: true, get: function () { return Application_1.Application; } });
Object.defineProperty(exports, "ApplicationContext", { enumerable: true, get: function () { return Application_1.ApplicationContext; } });
/** Import Components Animated */
const AnimatedLine_1 = require("./components/animated/AnimatedLine/AnimatedLine");
Object.defineProperty(exports, "AnimatedLine", { enumerable: true, get: function () { return AnimatedLine_1.AnimatedLine; } });
/** Import Components Forms */
const TextInput_1 = require("./components/form/TextInput/TextInput");
Object.defineProperty(exports, "TextInput", { enumerable: true, get: function () { return TextInput_1.TextInput; } });
/** Import Hooks */
const useApplication_1 = __importDefault(require("./hooks/useApplication"));
exports.useApplication = useApplication_1.default;
const useView_1 = __importDefault(require("./hooks/useView"));
exports.useView = useView_1.default;
/** Import Support */
/** Import Support Input Controller  */
const Controller_1 = require("./support/input-controller/Controller/Controller");
Object.defineProperty(exports, "Controller", { enumerable: true, get: function () { return Controller_1.Controller; } });
const TextController_1 = require("./support/input-controller/TextController/TextController");
Object.defineProperty(exports, "TextController", { enumerable: true, get: function () { return TextController_1.TextController; } });
const ToggleController_1 = require("./support/input-controller/ToggleController/ToggleController");
Object.defineProperty(exports, "ToggleController", { enumerable: true, get: function () { return ToggleController_1.ToggleController; } });
/** Import Database */
const Model_1 = require("./database/Model/Model");
Object.defineProperty(exports, "Model", { enumerable: true, get: function () { return Model_1.Model; } });
const Collection_1 = require("./database/Collection/Collection");
Object.defineProperty(exports, "Collection", { enumerable: true, get: function () { return Collection_1.Collection; } });
