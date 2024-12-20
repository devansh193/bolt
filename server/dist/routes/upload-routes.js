"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_controller_1 = require("../controller/upload-controller");
const router = express_1.default.Router();
router.post("/upload", upload_controller_1.uploadData);
router.get("/getData", upload_controller_1.getData);
exports.default = router;
