const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const path = require('path');
const port =  process.env.PORT || 80;

app.use(express.urlencoded({ extended: true }))
app.use('/static' , express.static('static'))

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views')); //set the views directory!


app.get("/" , (req , res)=>{     //GET request
    res.status(200).render('home.pug')
});

app.get("/about" , (req , res)=>{     //GET request
    res.status(200).render('about.pug')
});

app.get("/weather" , (req , res)=>{     //GET request
    res.status(200).render('weather.pug')
});

app.get("/aqi" , (req , res)=>{     //GET request
    res.status(200).render('aqi.pug')
});


app.get("*" , (req , res)=>{     //GET request
    res.status(200).render('error.pug')
});


app.listen(port , ()=>{
    console.log(`this app started on port ${port}`)
})
