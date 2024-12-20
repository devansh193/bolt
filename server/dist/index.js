"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_routes_1 = __importDefault(require("./routes/upload-routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", upload_routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});
