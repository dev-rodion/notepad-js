import * as express from 'express';
import {Request, Response} from "express";
import {config} from "./config";



// Init express app
const app = express();
app.use(express.json());

// Init routes middleware
app.get('/api', async (req: Request, res: Response) => {
    res.json({message: 'Hello world!'});
});


const PORT: number = config.port || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));