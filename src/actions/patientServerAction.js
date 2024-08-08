"use server";
import postModel from "@/models/Patient";
import connectDB from "@/lib/connectDB";

export const createPatient = async (prevState, formdata) => {
  try {
    await connectDB();
    const result = await postModel.create({
      username: formdata.get("username"),
      email: formdata.get("email"),
      phone: formdata.get("phone"),
      problem: formdata.get("problem"),
      problemhistory: formdata.get("problemhistory"),
    });

    return { status: "success" };

    console.log(result);
  } catch (error) {
    console.log(`formerr:`, error);

    return { status: "error" };
  }
};
