const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },

    Message: String,
    help: String,


    Phone: {
        type : Number,
        required : true
    },

        service :
        { 
            type : String,
            required : true

        },

    Email:{ 
        type : String,
        required: true

    }
});

const client = mongoose.model("client", clientSchema);

module.exports = client;