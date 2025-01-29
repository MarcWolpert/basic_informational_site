import express from 'express';
import type { Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
const PORT: number = 8080;
const app = express();
app.listen(PORT);

app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));

//logging middleware
app.use(morgan('dev'));
//static files middleware
app.use(express.static('./public'));
//middleware for accepting form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.render('index', { title: 'Homepage' });
});

app.get('/about', (req: Request, res: Response) => {
	res.render('about', { title: 'About' });
});
app.get('/contact-me', (req: Request, res: Response) => {
	res.render('contact-me', { title: 'Contact-Me' });
});

app.use((req: Request, res: Response) => {
	res.status(404).render('404', { title: 'Not Found' });
});
