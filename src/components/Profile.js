import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [file, setFile] = useState();
  const [location, setLocation] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    const binaryData = [];
    binaryData.push(e.target.files[0]);

    setFile(URL.createObjectURL(new File(binaryData, { type: "png/jpeg" })));
  }

  function handleChangeLocation(e) {
    setLocation(e.target.value);
  }
  return (
    <div>
      <div className="p-5">
        <div className="mx-auto md:mt-32 md:w-[800px] flex flex-col">
          <h1 className="font-bold text-4xl py-2 px-5">
            Welcome! Let's Create your profile
          </h1>
          <p className="px-5 text-gray-500">
            Let others get to know you better! You can do these later
          </p>
          <p className="font-bold text-lg mt-10 p-5">Add an avatar</p>
          <div className="flex flex-col md:flex-row p-5">
            <div>
              <img
                src={file}
                className="w-[100px] h-[100px] mb-10 md:mb-0 shadow-gray-950 shadow rounded-full mr-16"
              />
            </div>
            <div>
              <input
                type="file"
                onChange={handleChange}
                className="pb-5 w-[110px]"
              ></input>
              <label for="cars" className="ml-2">
                Or choose one of our defaults :
              </label>
              <select name="cars" id="cars" className="outline-none">
                <option value="volvo">Default</option>
                <option
                  value="saab"
                  onClick={() => {
                    setFile();
                  }}
                >
                  Image1
                </option>
                <option
                  value="mercedes"
                  onClick={() => {
                    setFile();
                  }}
                >
                  Image 2
                </option>
                <option
                  value="audi"
                  onClick={() => {
                    setFile();
                  }}
                >
                  Image 3
                </option>
              </select>
            </div>
          </div>
          <div className=" mb-10">
            <p className="px-5 py-2 pt-10 text-lg font-bold">
              Add your location
            </p>
            <input
              type="text"
              value={location}
              onChange={handleChangeLocation}
              className="outline-none mx-5"
              placeholder="Add your Location"
            />
          </div>
          <Link to="/details" className="mr-auto">
            <button className="mt-6 mx-4 py-3 px-4 w-64  text-white font-bold rounded-lg bg-[#f8b8d0] hover:bg-[#ea4b8b]">
              Create Account
            </button>
          </Link>
          <div className="text-gray-500 text-sm mx-4 mt-2 ">
            <Link to="/signup">or Press RETURN</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
