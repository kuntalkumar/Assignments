const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { mongoURI } = require("./config/config");

const app = express();

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database :)");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
        process.exit(1); 
    });

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const port = 8080; 
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
