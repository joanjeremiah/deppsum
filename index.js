const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
const random = require('random')

const mongoose = require('mongoose');
const quotesModel = require('./models/quotes');

db = 'mongodb+srv://joan1234:joan1234@cluster1.k51tm.mongodb.net/deppsum?retryWrites=true&w=majority';

mongoose.connect(db,
{ useUnifiedTopology: true,useNewUrlParser: true },() =>  console.log("Databse Connected"))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.engine('handlebars',exphbs({}));
app.set('view engine','handlebars')

// str = ""
// a = str.split(".");

// console.log(a);

// for (var i =0;i <= a.length;i++){
//     quotesModel.update({},{$push: { quotes: a[i]}
//     })
//         .then()
// }

// a = "Do you have any idea how long it takes those cups to decompose. Jaguar shark! So tell me - does it really exist? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! God help us, we're in the hands of engineers."
// console.log(a.length)


app.get('/',(req,res) => {
    res.render('index',{layout: ''})
})
app.post('/',(req,res) => {
    quotesModel.findOne({})
    .then(docs => {
        quotesList = docs.quotes;
        quotes = [];
        function getParagraph(){
            quote = "";
            for(var i = 0;i <=10;i++){
                if(quote.length < 255){
                    temp = quote;
                    quote += quotesList[random.int(min = 0, max = 68)];
                }
                if(quote.length > 280){
                    quote = temp;
                }        
            }
            return quote;
        }
        for(var i = 0;i<= req.body.noPara - 1;i++){
            quotes.push(getParagraph())
        }
        res.render('index',{layout: '',quotes})
    })
})


app.listen(8000,() => {console.log('server running on port 8000')})