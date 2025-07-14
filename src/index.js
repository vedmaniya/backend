import express from 'express';
import connectDB from './db/db.js';
const app=express();
import dotenv from 'dotenv';
dotenv.config({path:'./env'});
connectDB();
