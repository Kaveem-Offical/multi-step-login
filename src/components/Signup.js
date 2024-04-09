import React, { useState } from "react";
import signup from "../assets/signup.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUsers } from "../redux/userSlice";

function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [message, setMessage] = useState();
  const [checkboxcolor, setCheckboxcolor] = useState("");

  const users = useSelector((state) => state.users);
  const msg = users.filter((user) => user.message != null);
  console.log(msg);
  const NameHandler = (e) => setName(e.target.value);
  const UserNameHandler = (e) => setUserName(e.target.value);
  const EmailHandler = (e) => setEmail(e.target.value);
  const PasswordHandler = (e) => setPassword(e.target.value);
  const CheckboxHandler = (e) => {
    setCheckbox(e.target.checked);

    const users = {
      name: name,
      password: password,
      userName: userName,
      email: email,
      checkbox: checkbox,
      message: message,
    };
    dispatch(addUsers(users));
    console.log(msg.length);
  };

  const SignupHandler = (e) => {
    if (msg.length === 0) {
      console.log(msg.length, "logged in successfully");
    } else {
      e.preventDefault();
      console.log(msg.length, ":This is Message Length");
      setCheckbox(false);
      const users = {
        name: name,
        password: password,
        userName: userName,
        email: email,
        checkbox: checkbox,
        message: message,
      };
      dispatch(addUsers(users));
      setCheckboxcolor("outline outline-red-600");
      if (checkbox === true) {
        setCheckboxcolor("");
      } else {
        setCheckboxcolor("outline outline-red-600");
      }
    }
  };
  return (
    <div className="">
      <div className="flex md:flex-row">
        <div className="">
          <img src={signup} alt="signup" className="md:h-screen" />
        </div>
        <div className="text-center md:w-full ">
          <div className="text-right p-5">
            Already a member? <span className="text-indigo-600">Sign In</span>
          </div>
          <div className=" mx-[auto] p-5">
            <div className=" mx-auto md:w-[600px] flex flex-col">
              <h1 className="text-left text-3xl font-bold my-5">
                Sign Up! Here
              </h1>
              {msg.map((e) => {
                return (
                  <div className="text-left text-red-600">{e.message}</div>
                );
              })}
              <div className="flex flex-row">
                {/* Signup Name */}
                <div className="text-left p-5">
                  <p className="text-xl font-bold p-2">Name</p>
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter your name"
                    onChange={NameHandler}
                    className=" outline-none p-2"
                  />
                </div>
                {/* Signup UserName */}
                <div className="text-left p-5">
                  <p className="text-xl font-bold p-2">UserName</p>
                  <input
                    type="text"
                    autoComplete="off"
                    value={userName}
                    placeholder="Enter your UserName"
                    onChange={UserNameHandler}
                    className="outline-none p-2"
                  />
                </div>
              </div>
              {/* Signup Email */}
              <div className="text-left p-5">
                <p className="text-xl font-bold p-2">Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={EmailHandler}
                  placeholder="Enter your Email Address"
                  className="outline-none p-2"
                />
              </div>
              {/* Signup Password */}
              <div className="text-left p-5">
                <p className="text-xl font-bold p-2">Password</p>
                <input
                  type="password"
                  onChange={PasswordHandler}
                  placeholder="Enter your Password"
                  className="outline-none p-2"
                />
              </div>
              {/* Signup Checkbox */}
              <div className="text-left p-5">
                <input
                  type="checkbox"
                  onChange={CheckboxHandler}
                  checked={checkbox}
                  name="checkbox"
                  className={`m-2 ${checkboxcolor}`}
                />
                <label className="p-2 text-base">
                  Creating an account means you're okay with our{" "}
                  <span className=" text-indigo-600">
                    Terms of Service, Privacy Policy,
                  </span>{" "}
                  and our default{" "}
                  <span className=" text-indigo-600">
                    Notification Settings.
                  </span>
                </label>
              </div>
              <Link to="/profile" className="mr-auto">
                <button
                  onClick={SignupHandler}
                  className="m-6 py-3 px-4 w-64  text-white font-bold rounded-lg bg-[#ea4b8b]"
                >
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
