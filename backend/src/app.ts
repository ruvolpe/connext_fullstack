import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { userRouter } from "./routers/user.router";
import { contactRouter } from "./routers/contact.router";
import { handleErrors } from "./middlewares";
import { sessionRouter } from "./routers/session.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/contacts", contactRouter);

app.use(handleErrors);

export default app;
