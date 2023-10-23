"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routers_1 = __importDefault(require("./routers"));
const router = (0, express_1.Router)();
router.use("/metrics", routers_1.default.metrics);
router.use("/actions", routers_1.default.actions);
exports.default = router;
