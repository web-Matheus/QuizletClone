const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CardModel = require("./models/cards")
const cors = require("cors")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://matheus:3bZfVZtQEmz729ug@cluster0.scc5178.mongodb.net/quizlet-clone?retryWrites=true&w=majority")



app.get("/lists", (req,res) => {
    CardModel.find({}, (error,result) => {
        if(error){
            res.json(error)
        } else{
            res.json(result)
        }
    })
})
app.post("/newCard", async (req, res) => {
    const card = req.body
    const newCard = new UserModel(card);
    await newCard.save()

    res.json(card)
})

app.listen(3001, () => {
    console.log("app running at port 3001")
})