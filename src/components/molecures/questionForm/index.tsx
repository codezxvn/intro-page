"use client";

import { IconInput } from "@/components/atoms";
import { IconInputProps } from "@/components/atoms/types/iconInputType";
import { sendFormToGoogleSheet } from "@/components/server";
import { SendFormToSheetType } from "@/components/server/types/googleSheetType";
import { FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdEmail, MdMan } from "react-icons/md";
import { toast } from "react-toastify";

export default function QuestionForm() {
  const [submiting, setSubmiting] = useState(false);

  const inputs: IconInputProps[] = [
    { label: "Name", icon: MdMan, name: "name", type: "text" },
    { label: "Email", icon: MdEmail, name: "email", type: "email" },
    { label: "Question", icon: FaQuestion, name: "question", type: "text" },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmiting(true);
    const formData = new FormData(e.currentTarget);
    const values = Array.from(formData.values());
    const nameEntry = formData.get("name");
    const emailEntry = formData.get("email");
    const questionEntry = formData.get("question");
    if (nameEntry === null || emailEntry === null || questionEntry === null) {
      toast.error("Form not filled");
      return;
    }
    const formSubmit: SendFormToSheetType = {
      name: nameEntry.toString(),
      mail: emailEntry.toString(),
      question: questionEntry.toString(),
    };

    sendFormToGoogleSheet(formSubmit)
      .then((values) => {
        setSubmiting(false);
        if (values) {
          toast.error(values);
          return;
        }

        toast.success("Your question has been received");
      })
      .catch((e) => {
        setSubmiting(false);
        toast.error("An Error occur");
        console.log(e);
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      className=" bg-primary drop-shadow w-full flex items-center flex-col  text-secondary max-w-2xl pt-7 rounded"
    >
      {inputs.map((item, i) => (
        <div key={item.label + `${i}`} className="px-6 w-full mb-3">
          <IconInput {...item} />
        </div>
      ))}
      <button
        type="submit"
        title="submit question"
        disabled={submiting}
        className="rounded-b px-4 py-2 w-full uppercase disabled:bg-red-300 disabled:text-primary bg-red-300 text-secondary font-bold hover:opacity-80 hover:text-primary hover:bg-red-800 flex justify-center items-center group"
      >
        <span>Submit your question</span>
        <div className="ml-4 group-hover:ml-16 group-disabled:ml-4 text-xl">
          {submiting ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : (
            <IoIosArrowForward className="" />
          )}
        </div>
      </button>
    </form>
  );
}
