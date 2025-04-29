const Note = require('../models/Note');

exports.updateNotes = async (req, res) => {
  try {
    const { id, title, content } = req.body;

    if (!id || !title || !content) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { $set: { title, content } },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: updatedNote,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

