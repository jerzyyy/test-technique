const express = require("express");
const cors = require("cors");

const request = require("request");

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  request(
    {
      uri: "https://jsonplaceholder.typicode.com/posts?userId?"
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.json(body);
      } else {
        console.log(error);
      }
      console.log(response.body)
    }
  );
});

app.listen(5000, () => {
  console.log("Products server listening on port 5000");
});
