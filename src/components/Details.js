import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./details.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardimg1 from "../assets/card1.jpg";
import cardimg2 from "../assets/card2.jpg";
import cardimg3 from "../assets/card3.jpg";

function Details() {
  console.log("hello world");
  const [card1, setCard1] = useState({ border: "", content: "" });
  const [card2, setCard2] = useState({ border: "", content: "" });
  const [card3, setCard3] = useState({ border: "", content: "" });
  function handleCard1() {
    setCard1({
      border: "h-[350px] border-2 border-pink-600",
      content: "opacity-100 mt-[100px] translate-y-[100px]",
    });
  }
  function handleCard2() {
    setCard2({
      border: "h-[350px] border-2 border-pink-600",
      content: "opacity-100 mt-[100px] translate-y-[100px]",
    });
  }
  function handleCard3() {
    setCard3({
      border: "h-[350px] border-2 border-pink-600",
      content: "opacity-100 mt-[100px] translate-y-[100px]",
    });
  }
  return (
    <div className="flex flex-col">
      <div className="mx-auto mt-32 text-center">
        <h1 className="text-4xl font-bold p-5">What brings you to Dribble ?</h1>
        <p className="text-gray-500">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>
      </div>
      <div className="flex flex-col items-center mt-16 ">
        <div className="flex flex-col md:flex-row">
          {/* Expanding Card */}
          <div
            onClick={handleCard1}
            className="m-10 p-5 flex justify-center items-center"
          >
            <div className={`card ${card1.border} `}>
              <div className="imgbox">
                <img src={cardimg1} alt="sharemywork" />
                <h1 className="mt-4 text-md font-bold text-center">
                  I'm a designer looking to share my work
                </h1>
              </div>
              <div className={`content ${card1.content}`}>
                <h2>
                  With over 7 million shots from a vast community of designers,
                  Dribble is the Leading source fro design inspiration
                </h2>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-2xl m-2 text-pink-600"
                />
              </div>
            </div>
          </div>
          {/* Expanding card Ends Here */}
          {/* Expanding Card */}
          <div onClick={handleCard2} className=" m-10 p-5">
            <div className={`card ${card2.border} `}>
              <div className="imgbox">
                <img src={cardimg2} alt="sharemywork" />
                <h1 className="mt-4 text-md font-bold text-center">
                  I'm a designer looking to hire a designer
                </h1>
              </div>
              <div className={`content ${card2.content}`}>
                <h2>
                  With over 7 million shots from a vast community of designers,
                  Dribble is the Leading source fro design inspiration
                </h2>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-2xl m-2 text-pink-600"
                />
              </div>
            </div>
          </div>
          {/* Expanding card Ends Here */}
          {/* Expanding Card */}
          <div onClick={handleCard3} className=" m-10 p-5">
            <div className={`card ${card3.border} `}>
              <div className="imgbox">
                <img src={cardimg3} alt="sharemywork" />
                <h1 className="mt-4 text-md font-bold text-center">
                  I'm looking for design inspiration
                </h1>
              </div>
              <div className={`content ${card3.content}`}>
                <h2>
                  With over 7 million shots from a vast community of designers,
                  Dribble is the Leading source fro design inspiration
                </h2>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-2xl m-2 text-pink-600"
                />
              </div>
            </div>
          </div>
          {/* Expanding card Ends Here */}
        </div>
      </div>
      <div className="flex flex-col items-center m-5">
        <div>Anything else? You can select multiple</div>
        <div>
          <Link to="/verifymail" className="mr-auto">
            <button className="mx-6 mt-3 mb-1 py-3 px-4 w-64  text-white font-bold rounded-lg bg-[#ea4b8b]">
              Finish
            </button>
          </Link>
        </div>

        <div className="text-gray-500 ">
          <Link to="/profile">or Press RETURN</Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
