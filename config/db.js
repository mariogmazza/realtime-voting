const mongoose = require("mongoose");

try {
  require("dotenv").config();
} catch (error) {}

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.Promise = Promise;
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
} else {
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
  });
}
