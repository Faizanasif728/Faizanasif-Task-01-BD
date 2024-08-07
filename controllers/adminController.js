const adminArray = [];

module.exports = {
  createAdmin: (req, res) => {
    try {
      console.log(req.body);
      adminArray.push(req.body);
      return res.send({
        response: "admin created successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllAdmin: (req, res) => {
    try {
      return res.send({
        response: adminArray,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteAdmin: (req, res) => {
    try {
      return res.send({
        response: "admin deleted successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
