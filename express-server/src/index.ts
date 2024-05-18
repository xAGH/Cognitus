import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

type ResponseType = {
    status: boolean,
    message: string | undefined, 
    data: any
}

const users = [
    { id: 1,name: "Alice", age: 30 },
    { id: 2,name: "Bob", age: 25 },
    { id: 3,name: "Charlie", age: 35 },
    { id: 4,name: "Diana", age: 28 },
    { id: 5,name: "Edward", age: 22 }
];

// Carga las variables de entorno especificadas en el archivo .env
dotenv.configDotenv()

const app = express();
const port = process.env.PORT || 3000

// app.use -> Utilizar middlewares globalmente
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
    console.log("Ingreso a la ruta /");
    res.status(200).send();
})

app.get("/query-params", (req: Request, res: Response) => {
    const params = req.query;
    return res.status(200).json(params);
})

app.get("/path-vars/:id", (req: Request, res: Response) => {
    const params = req.params;
    return res.status(200).json(params);
})

app.post("/body", (req: Request, res: Response) => {
    const body = req.body;
    console.log(req.headers);
    return res.status(200).json(body);
})

app.get("/headers", (req: Request, res: Response) => {
    const headers = req.headers;
    return res.status(200).json(headers);
})


app.get("/users", (req: Request, res: Response) => {
    const usersResponse: ResponseType = {
        status: true,
        message: "",
        data: users
    }
    return res.status(200).json(usersResponse);
})

app.get("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const foundUser = users.filter((user) => user.id == parseInt(id))
    const hasUser = foundUser.length > 0;
    const usersResponse: ResponseType = {
        status: hasUser ? true : false,
        message: hasUser ? "" : `El usuario con id ${id} no se encontró`,
        data: foundUser
    }
    return res.status(hasUser ? 200 : 404).json(usersResponse);
})

app.post("/users", (req: Request, res: Response) => {
    const body = req.body;
    users.push(body)
    const usersResponse: ResponseType = {
        status: true,
        message: "Se ha creado el usuario",
        data: body
    }
    return res.status(201).json(usersResponse);
})

app.delete("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const foundUser = users.filter((user) => user.id == parseInt(id))
    const hasUser = foundUser.length > 0;
    if (!hasUser) {
        const usersResponse: ResponseType = {
            status: false,
            message: `El usuario con id ${id} no se encontró`,
            data: null
        }
        return res.status(404).json(usersResponse);
    }
    else {
        const userIndex = users.indexOf(foundUser[0]);
        users.splice(userIndex, 1)
        return res.status(204).send();
    }
})

app.put("/users/", (req: Request, res: Response) => {
    const userBody = req.body;
    const foundUser = users.filter((user) => user.id == userBody.id)
    const hasUser = foundUser.length > 0;
    if (!hasUser) {
        const usersResponse: ResponseType = {
            status: false,
            message: `El usuario con id ${userBody.id} no se encontró`,
            data: null
        }
        return res.status(404).json(usersResponse);
    }
    else {
        const userIndex = users.indexOf(foundUser[0]);
        users[userIndex] = userBody;
        const usersResponse: ResponseType = {
            status: true,
            message: `El usuario con id ${userBody.id} se actualizó`,
            data: userBody
        }
        return res.status(200).json(usersResponse);
    }
})

// app.listen -> Pone en marcha el servidor
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})