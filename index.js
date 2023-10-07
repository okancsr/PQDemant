import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import lodash from "lodash";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/TMler');

const data = [
    { _id: "65205914816e27433992f09a", name: 'Kayseri-1' },
    { id: "265205a2e816e27433992f09f", name: 'Kayseri-2' },
    // Add more items here
];
const trafomerkeziSchema = ({ 
    name: String,
   
  });
  
const Trafomerkezi = mongoose.model('Trafo', trafomerkeziSchema);

const tmlistSchema = ({ 
    name: String,
    items: [trafomerkeziSchema]
  });
  
  const TmList = mongoose.model('TmList', tmlistSchema);

let tasks = [];
let wtasks = [];



app.get('/', (req, res) => {
    res.render("index.ejs", { tasks });
});

app.get('/', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });

});

app.get('/Kayseri-1', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Kayseri-2', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Kayseri-3', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Talas', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Erkilet', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Kapasitor', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Cinkur', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Kalaba', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Sendiremeke', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});


app.get('/Taksan', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Yesilhisar', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Pinarbasi', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Sizir', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Camlica', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.get('/Komp', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

/*
app.get("/:customListName", async function (req, res) {
  const customListName = (req.params.customListName);
  try{
    const foundTmList = await TmList.findOne({name: customListName});
  console.log("CustomListName:"+ customListName);
  console.log("foundTmList:" +foundTmList);
    if (!foundTmList){
     // Creat a new List
     const list = new TmList({
      name: customListName,
  
    });
    
    list.save();
    res.redirect("/" + customListName);
  
    } else {
    //Show existing list
    res.render("bootstrap.ejs", {listTitle: foundTmList.name, newListItems: foundTmList.items});
    }
    } catch (err){
      console.log(err);
    }
  
  });

*/

  app.post('/search', (req, res) => {
    const query = req.body.query.toLowerCase();
    const results = data.filter(okan => okan.name.toLowerCase().includes(query)).map(item => item.name);
    //res.render('bootstrap', { query, results });
    res.redirect("/" + results);
    if(query){
      //res.render('bootstrap', { query: '', results: [] });
      
    }
    console.log(results);
});

app.get('/Kayseri-1', (req, res) => {
  res.render('bootstrap', { query: '', results: [] });
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});