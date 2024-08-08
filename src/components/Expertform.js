import React from "react";
import { useFormState } from "react-dom";
import { useRef } from "react";
import { createExpert } from "@/actions/expertServerAction";

const initialState = {
  status: "",
};

const Expertform = () => {
  const ref = useRef(null); // Just to reset form

  const [state, create] = useFormState(createExpert, initialState);

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form
            ref={ref}
            action={async (formdata) => {
              await create(formdata);
              ref.current?.reset();
            }}
          >
            <div className="mb-5">
              <label
                htmlFor="username"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>

              <input
                type="text"
                name="username"
                id="username"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your Phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="expertise"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Expertise
              </label>
              <input
                type="text"
                name="expertise"
                id="expertise"
                placeholder="Your Expertise"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="profile"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Profile Details
              </label>
              <textarea
                rows="4"
                name="profile"
                id="profile"
                placeholder="Give your biography details"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>

            {state?.status === "success" && (
              <div className="mt-5 text-green-500">
                Your message has been successfully submitted!
              </div>
            )}
            {state?.status === "error" && (
              <div className="mt-5 text-red-500">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Expertform;
