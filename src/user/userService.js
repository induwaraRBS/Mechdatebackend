var userModel = require("./userModel");

//get data
module.exports.getDataFromDBService = () => {
  return new Promise(function checkURL(resolve, reject) {
    userModel.find({}, function returnData(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
};

//create data
module.exports.createUserDBService = (userDetails) => {
  return new Promise(function myFn(resolve, reject) {
    var userModelData = new userModel();

    userModelData.first_name = userDetails.first_name;
    userModelData.Last_name = userDetails.Last_name;
    userModelData.password = userDetails.password;
    // var encrypted = encrypted.encrypt(userDetails.password);
    // userModelData.password = encrypted;

    userModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};