import express from "express";

async function startServer() {
  const app = express();
  const port = 3000;

  app.use(express.static("src"));

  app.get('/', async (req, res) => {
    res.redirect('/new-year')
  });

  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
};

startServer()
