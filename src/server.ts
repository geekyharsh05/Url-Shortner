import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { dbConnect } from './db/db.connect';
import route from './routes/url.route';

dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.PORT ?? 4001;

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', route);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: http://localhost:${PORT}`);
});
