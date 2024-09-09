import express from "express";

let articlesInfo = [
  {
    name: "learn-node",
    upvotes: 0,
  },
  { name: "learn-react", 
    upvotes: 0 },
  {
    name: "mongodb",
    upvotes: 0,
  },
];

const app = express();
app.use(express.json());

// localhost:3000/articles/learn-node

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;

  const article = articlesInfo.find(a=> a.name === name);

  if (article){
    article.upvotes += 1;
    res.status(200).send(`${name} now has ${article.upvotes} upvotes!`);
  }
    else{
        res.status(404).send("Article not found");
    }
});



  console.log("server is running on port 8000");

