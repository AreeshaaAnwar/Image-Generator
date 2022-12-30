import React from "react";
import { useState, useEffect } from "react";
import "./ImageGenerator.css";
import Rectangle from "../Image/Rectangle 2697.png";
import { useFetch } from "../Hooks/useFetch";
import { Link } from "react-router-dom";
import data from "../Data/db.json";
import { useNavigate } from "react-router-dom";
const ImageGenerator = () => {
  const [prompt, setprompt] = useState("");
  const [n, setn] = useState("");
  const [size, setsize] = useState("");
  var [image, setimage] = useState("");

  const token = localStorage.getItem("accessToken");
  
    const { apidata, isPending, postData } = useFetch(
      "https://auth-system-production.up.railway.app/v1/api/openai/image-generator",
      "POST",
      token
    );
  
  
  
  var object;
  var d;

  const handleSubmit = (e) => {
    e.preventDefault();

    postData({
      prompt: prompt,
      n: n,
      size: size,
    });

    console.log(prompt, size, n);
    object = apidata;
    d = object.data[0].url;
    console.log("image......" ,object.data[0].url )
    setimage(d);
    console.log(d, "sssss");
  };


 
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <img
          src={Rectangle}
          alt="Rectangle"
          className="active"
          style={{ padding: "10px",width:'100px',height:'100px' }}
        ></img>

        {localStorage.getItem("accessToken") ? (
          <button className="ra" onClick={logout}>
            LOGOUT
          </button>
        ) : (
          <button className="ra">
          <Link to="/Login">Login</Link>
            {/* <Link  to="/Login"> */}
              Login
            {/* </Link> */}
          </button>
        )}
      </div>
      <div className="cards">
        <div className="car">
          <div className="top">
            <h7 style={{ color: "black", fontSize: "larger" }}>
              AI Image Generator
            </h7>
            <button href="#" className="link">
              More AI TOOLS
            </button>
          </div>
          <div className="d">
            <form onSubmit={handleSubmit}>
              {data.Information.map((da, index) => (
                <div key={index}>
                  {da.name === "AI Image Generator"
                    ? da.textInputs.map((a, index) => (
                        <div key={index}>
                          {a.type === "textarea" ? (
                            <input
                              className="e"
                              type={a.type}
                              placeholder={a.placeholder}
                              onChange={(e) => setprompt(e.target.value)}
                            ></input>
                          ) : (
                            ""
                          )}
                          {a.type === "option" ? (
                            <input
                              className="e"
                              type={a.type}
                              placeholder={a.placeholder}
                              onChange={(e) => setsize(e.target.value)}
                            ></input>
                          ) : (
                            ""
                          )}
                          {a.type === "number" ? (
                            <input
                              className="e"
                              type={a.type}
                              placeholder={a.placeholder}
                              onChange={(e) => setn(e.target.value)}
                            ></input>
                          ) : (
                            ""
                          )}
                        </div>
                      ))
                    : ""}
                </div>
              ))}
              <div className="flex">
               
                {!isPending && <button  className="btn">create</button>}
                {isPending && <button className="btn"  disabled>loading</button>}
              </div>
            </form>
          </div>
        </div>
        <div className="car">
        
          {image && (
            <img src={image} className="image"/>
          )}
        
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
