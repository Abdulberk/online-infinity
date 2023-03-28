import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';







const app: Express= express();
dotenv.config();
const PORT = process.env.PORT || 3001;




app.use(bodyParser.json());
app.use(cors());



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
}

);


