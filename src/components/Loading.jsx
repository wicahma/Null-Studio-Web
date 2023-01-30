import React, { useEffect } from "react";
import loading_people from "../assets/images/loading-people.png";
import axios from "axios";
const Loading = (props) => {
  const [candaan, setCandaan] = React.useState("Loading...");
  const getCandaan = async () => {
    await axios
      .get("https://candaan-api.vercel.app/api/text/random")
      .then((res) => {
        console.log(res.data);
        setCandaan(res.data.data);
      })
      .catch((err) => {
        setCandaan(err.message);
      });
  };
  useEffect(() => {
    return () => {
      getCandaan();
    };
  }, []);

  return (
    <div className="w-screen text-center h-screen text-white font-extralight flex-col fixed top-0 left-0 flex justify-center bg-neutral-900/80 items-center z-50">
      <img
        src={loading_people}
        alt="loading-people"
        className="w-[350px] animate-hover"
      />
      <p>{candaan}</p>
    </div>
  );
};

export default Loading;
