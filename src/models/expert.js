import mongoose from "mongoose";

// Creating schema

const expertSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  expertise: { type: String, required: true },
  profile: { type: String, required: true },
});

// Creating models

const Counseller =
  mongoose.models.Counseller || mongoose.model("Counseller", expertSchema);

export default Counseller;
