import mongoose from "mongoose";

// Clear compiled models
mongoose.models = {};
mongoose.modelSchemas = {};

// creating Schema
const patientSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    problem: { type: String, required: true },
    problemhistory: { type: String, required: true },
  }

  // { timestamp: true }
);

// compiling Schema | creating model,   kind of creating collection
const Patient =
  mongoose.models.Patient || mongoose.model("Patient", patientSchema);

export default Patient;
