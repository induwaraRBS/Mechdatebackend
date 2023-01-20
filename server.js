var express = require("express");
var server = express();
var mongoose = require("mongoose");
var routes = require("./routes/routes");
const cors = require("cors");

// check database connected or not
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/est", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log("error", err);
  });

// mongoose.connect("mongodb://127.0.0.1:27017/est",{useNewUrlParser:true,useUndifiedTopology:true},function checkDB(error){
//     if(error){
//         console.log("erroror")
//     }
//     else{
//         console.log("DB Conecttttttt")
//     }
// });

//check express connected or not
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function check(error) {
  if (error) {
    console.log("errror");
  } else {
    console.log("startssss");
  }
});
