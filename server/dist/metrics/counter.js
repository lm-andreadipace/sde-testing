"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prom_client_1 = __importDefault(require("prom-client"));
const counter = new prom_client_1.default.Counter({
    name: 'my_custom_counter',
    help: 'Description of my custom counter',
    labelNames: ['custom_label'],
});
exports.default = counter;
