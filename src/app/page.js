"use client";
import Clientform from "@/components/Clientform";
import Expertform from "@/components/Expertform";
import Patientform from "@/components/Patientform";
import { useState } from "react";

export default function Home() {
  const [formType, setFormType] = useState(null);

  const handleClientForm = () => {
    setFormType("client");
  };

  const handleCounselorForm = () => {
    setFormType("counselor");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-12">
      <h1 className="text-xl font-medium">
        Welcome to <span className="text-red-500">Consult My Life</span>
      </h1>

      <div className="container mx-auto pt-14">
        <div className="flex justify-center gap-4 mb-10">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded"
            onClick={handleClientForm}
          >
            Open Client Form
          </button>
          <button
            className="px-4 py-2 text-white bg-green-500 rounded"
            onClick={handleCounselorForm}
          >
            Open Counselor Form
          </button>
        </div>
        <div>
          {formType === "client" && <Patientform />}
          {formType === "counselor" && <Expertform />}
        </div>
      </div>
    </main>
  );
}
