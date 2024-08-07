const teacherArray = [];

module.exports = {
  createTeacher: (req, res) => {
    try {
      console.log(req.body);
      teacherArray.push(req.body);
      return res.send({
        response: "teacher created successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllTeacher: (req, res) => {
    try {
      return res.send({
        response: teacherArray,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteTeacher: (req, res) => {
    try {
      return res.send({
        response: "teacher deleted successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
