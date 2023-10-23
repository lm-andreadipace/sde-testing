"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prom_client_1 = __importDefault(require("prom-client"));
const counter_1 = __importDefault(require("../../metrics/counter"));
// const prefix = 'node_ws_';
// const collectDefaultMetrics = client.collectDefaultMetrics;
const register = new prom_client_1.default.Registry();
register.registerMetric(counter_1.default);
// collectDefaultMetrics({ prefix });
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.set("Content-Type", register.contentType);
    return res.send(yield register.metrics());
}));
exports.default = router;
