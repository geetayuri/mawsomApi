import express from "express";
import router from './routes/myRouter';
/*import { Query } from "express-serve-static-core";
import { User } from "./model/user.type";*/


/*export interface TypedRequestQuery<T extends Query> extends Express.Request {
  query: T;
}*/

const app = express();

/*app.get("/", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/login", (req: TypedRequestQuery<User>, res: Response) => {
  res.json(req.query);
});*/

/*app.use((req: Request, res: Response, next: NextFunction) => {
  // Middleware logic goes here
  next(); // Call next to move on to the next middleware or route handler
});*/

app.use(router);

app.listen(3000, () => console.log("Server is running..."));
