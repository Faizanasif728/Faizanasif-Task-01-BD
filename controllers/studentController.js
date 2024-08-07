const studentArray = [];
module.exports = {
  createStudent: (req, res) => {
    try {
      console.log(req.body);
      studentArray.push(req.body);
      return res.send({
        response: "student created successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllStudent: (req, res) => {
    try {
      return res.send({
        response: studentArray,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteStudent: (req, res) => {
    try {
      return res.send({
        response: "student deleted successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
