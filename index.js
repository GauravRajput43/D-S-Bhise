const express = require("express");
const app = express();
const mongoose= require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const client = require("./models/Dsbhise.js")



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine('ejs',ejsMate);




const Mongo_URL = "mongodb://127.0.0.1:27017/Bhise&co" ;
main()
.then(()=>{
    console.log("connected to db");
})
.catch(()=>{
    console.log("err in db");
})

async function main() {
    await mongoose.connect(Mongo_URL);
}



app.get("/",(req,res)=>{
    res.render("./listing/index.ejs");
})
app.get("/Book",(req,res)=>{
    res.render("./listing/Booking.ejs");
})

app.get("/Home",(req,res)=>{
    res.redirect("/");
})
app.get("/aboutUs",(req,res)=>{
    res.render("./listing/aboutUs.ejs");
})
app.get("/contactUs",(req,res)=>{
    res.render("./listing/contactUs.ejs");
})

app.get("/Book/services",(req,res)=>{
    res.render("./listing/services/service.ejs");
})
app.get("/Book/services/itr",(req,res)=>{
    res.render("./listing/services/itr.ejs");
})
app.get("/Book/services/gst",(req,res)=>{
    res.render("./listing/services/gst.ejs");
})
app.get("/Book/services/Ragistration",(req,res)=>{
    res.render("./listing/services/ragistration.ejs");
})
app.get("/Book/services/payroll",(req,res)=>{
    res.render("./listing/services/payroll.ejs");
})
app.get("/Book/services/bookkeeping",(req,res)=>{
    res.render("./listing/services/Accounting.ejs");
})

app.post("/Book/welcome", async (req, res) => {
  try {
    let { name, service, Message, Phone, Email, help } = req.body;

    let newClient = new client({
      Name: name,
      service: service,
      Message: Message,
      Phone: Phone,
      Email: Email,
      help: help
    });

    await newClient.save();

    console.log("Client saved successfully");

    res.render("./listing/welcome.ejs", { name });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(8080,(req,res)=>{
    console.log("app is listining on : 8080");
})

