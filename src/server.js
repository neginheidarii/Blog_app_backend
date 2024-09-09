import express from "express";

const app = express();
app.use(express.json());

// localhost:3000/articles/learn-node

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const { upvotes } = req.body;

  articlesInfo[name].upvotes = upvotes;
  res.status(200).send(articlesInfo[name]);
});


app.listen(8000, () => {
  console.log("server is running on port 8000");
});
