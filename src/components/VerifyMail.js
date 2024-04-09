import React from "react";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function VerifyMail() {
  const users = useSelector((state) => state.users);
  const emailid = users[users.length - 1].email;

  console.log(emailid);

  return (
    <div className="flex flex-col">
      <div className="mx-auto mt-32 text-center">
        <h1 className="text-4xl font-bold p-5">Please verify your email...</h1>
        <FontAwesomeIcon
          icon={faEnvelopeCircleCheck}
          className="text-gray-500 text-8xl p-5"
        />{" "}
        <p className="text-gray-500 p-5">
          Please verify your email address. We've send a confirmation email to:
        </p>
        <div className="p-5">{emailid}</div>
        <p className="text-gray-500 p-5">
          Didn't recive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <span className=" text-[#ea4b8b]">
            resend the confirmation email.
          </span>
        </p>
        <p className="text-gray-500">
          Wrong email address?{" "}
          <span className=" text-[#ea4b8b]">Change it.</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default VerifyMail;
