const Note = require("../models/Note");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});

    if (!notes) {
      return res.status(500).json({
        success: false,
        message: "Data not found",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Data feched Successfully",
      data: notes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
exports.getAllNotesById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({
          success: false,
          message: "Data not found",
        });
      }

      const notes = await Note.findById(id);

      if (!notes) {
        return res.status(404).json({
          success: false,
          message: "Data not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: notes,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
      });
    }
  };


