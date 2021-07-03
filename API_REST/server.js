import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`Server online. \nhttp://localhost:${port}`);
});
