var userService = require("./userService");

var getDataControllerfn = async (req, res) => {
  var employee = await userService.getDataFromDBService();
  res.send({ status: true, data: employee });
};

var createUserControllerfn = async (req, res) => {
  console.log(req.body);
  var status = await userService.createUserDBService(req.body);
  if (status) {
    res.send({ status: true, message: "User Created Successfully" });
  } else {
    res.send({ status: false, message: "Error Creating User" });
  }
};

var updateUserController = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  var result = await userService.updateOneUserDBService(
    req.parmas.id,
    req.body
  );

  if (result) {
    res.send({ status: true, message: "user Updated" });
  } else {
    res.send({ status: false, message: "User Update Failed" });
  }
};

var deleteUserController = async (req, res) => {
  console.log(req.params.id);

  var result = await userService.removeOneUserDBService(req.params.id);

  if (result) {
    res.send({ status: true, message: "User Deleted" });
  } else {
    res.send({ status: false, message: "User Deleted Failed!" });
  }
};

module.exports = {
  getDataControllerfn,
  createUserControllerfn,
  updateUserController,
  deleteUserController,
};
