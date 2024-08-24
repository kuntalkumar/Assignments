// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const schema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   dueDate: { type: Date, required: true },
//   status: { type: String, enum: ["Pending", "Complete", "Rework"], default: "Pending" },
//   createdDate: { type: Date, default: Date.now }
// });

// schema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   }
// });

// module.exports = mongoose.model("Assignment", schema);
