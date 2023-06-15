const data = [
  {
    id: "1",
    text: "Finish homework",
    checked: false,
    priority: 1,
    done: false,
    time: "2 hours"
  },
  {
    id: "2",
    text: "Go grocery shopping",
    checked: false,
    priority: 2,
    done: false,
    time: "1 hour"
  },
  {
    id: "3",
    text: "Exercise",
    checked: false,
    priority: 3,
    done: false,
    time: "30 minutes"
  }
];
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: false}))
  app.get("/data",(req, res)=>{
    res.json(data);
  });

app.get("/data/:id",(req,res)=>{
  const id = req.params.id;

  for (let newData of data){
    if(newData.id ===  id){
      res.json(newData);
      return;
    }
    res.status(404).send("id not found.");
  };
});

app.delete("/data/:id",(req,res)=> {
  const id = req.params.id;
  data = data.filter((newData) => {
    if(newData.id !== id){
      return true;
    }
    return false;
  });
  res.send("data is deleted");
});

app.post("/data", (req, res)=>{
  const newData = req.body;
  data.push(newData);
  res.send("newData is added to the list!");
});


app.listen(port, ()=> console.log(`Server listening at port ${port}`));
