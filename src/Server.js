import { configDotenv } from 'dotenv';
import ConnetDB from './db/db.js';

configDotenv({ path: './.env' });

ConnetDB()

