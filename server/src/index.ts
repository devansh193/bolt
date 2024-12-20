import express from "express";
import uploadRoutes from "./routes/upload-routes";

const app = express();
app.use(express.json());

app.use("/api/v1", uploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
