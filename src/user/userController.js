var userService = require("./userService");

var getDataControllerfn = async (req, res) => {
  var employee = await userService.getDataFromDBservice();
  res.send({ status: true, data: employee });
};

var createUserControllerfn = async (req, res) => {
  console.log(req.body);
  var status = await userService.createUserDBService(req, body);
  if (status) {
    res.send({ status: true, message: "User Created Successfully" });
  } else {
    res.send({ status: false, message: "Error Creating User" });
  }
};

module.exports = { getDataControllerfn, createUserControllerfn };
