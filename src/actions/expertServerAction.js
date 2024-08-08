"use server";
import ExpertModel from "@/models/expert";
import connectDB from "@/lib/connectDB";

export const createExpert = async (prevState, formdata) => {
  try {
    await connectDB();
    const result = await ExpertModel.create({
      username: formdata.get("username"),
      email: formdata.get("email"),
      phone: formdata.get("phone"),
      expertise: formdata.get("expertise"),
      profile: formdata.get("profile"),
    });

    return { status: "success" };

    console.log(result);
  } catch (error) {
    console.log(`formerr:`, error);

    return { status: "error" };
  }
};
