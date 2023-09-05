import App from "./app";
import express, {Express} from "express";
import Cors from "./cors";

const port = process.env.PORT ?? 3001

const app: Express = express()
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
App(app)
Cors(app)
