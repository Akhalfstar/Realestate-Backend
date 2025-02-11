import { configDotenv } from 'dotenv';
import ConnetDB from './db/db.js';

// configDotenv();

configDotenv({ path: './.env' });

ConnetDB();

