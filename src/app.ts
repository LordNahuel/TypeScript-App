import express from "express";
import bodyParser from "body-parser";
import morgan from 'morgan';

// Config constants
import { config } from "./config/config"; 

// Routes 
import postRoutes from "./routes/post.routes";
import authRoutes from "./routes/auth.routes";
import commentRoutes from "./routes/comment.routes";

const app = express(); 

// settings
app.set('port', config.port || process.env.PORT || 3000);

// middlewares 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 
    limit: '50mb',
    extended: false
}));

app.use(bodyParser.json({
    limit: '50mb'
}));

// routes 
app.use('/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/comments/posts', commentRoutes);

app.listen(app.get('port'));
console.log(`Server running on port ${app.get('port')}`); 

export default app; 