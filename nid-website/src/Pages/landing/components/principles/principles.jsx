import React from "react";
import "./principles.css";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaUserAlt, FaUserLock } from "react-icons/fa";

const Principles = () => {
  return (
    <>
      <div className="hero">
        <div>
          <div className="into-img"></div>
        </div>
      </div>

      <section class="homee" id="Home">
        <div class="box-contianer">
          <div class="boxs">
            <div class="box">
              <h1 style={{ fontSize: "5rem", color: "white" }}>
                {" "}
                <span style={{ color: "#47f4c7" }}>NID</span> Principles
              </h1>
              <h6
                class="bottom"
                style={{
                  marginLeft: "0px",
                  color: "#899296",
                  fontSize: "18px",
                  fontWeight: "20rem",
                }}
              >
                {" "}
                This entire program aims to design and <br></br>implement a
                functional ID system for Ethiopa <br></br>at national level for
                all intents and Puposes. <br></br> "Natilnal ID" shall mean
                Foundational Digital ID. <br></br>From this Programs
                perspective, the term<br></br> <br></br>
                <br></br>National ID shall mean Foundational Digital ID.{" "}
                <br></br>From Thid Program's erspective, the term
              </h6>
            </div>
          </div>
          <div class="boxs">
            <div class="box">
              <div class="row">
                <div class="column">
                  <div class="card">
                    <h3 style={{ color: "white" }}>
                      Privacy and Minimal<br></br>
                      Data Collection
                    </h3>
                  </div>
                </div>
                <div class="column">
                  <div class="card">
                    <h3 style={{ color: "white" }}>
                      Inclusion <br></br>Principles
                    </h3>
                  </div>
                </div>
                <div class="column">
                  <div class="card">
                    <h3 style={{ color: "white" }}>
                      Authontication <br></br>Mechanisms & Standards
                    </h3>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3 style={{ color: "white" }}>
                      Authontication<br></br> Mechanisms & Standards
                    </h3>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3 style={{ color: "white" }}>
                      Usage of <br></br>Credentials
                    </h3>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3 style={{ color: "white" }}>
                      Learn More <FaAngleRight />{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="box-contianer" style={{ border: "0.1em solid white" }}>
          <div class="boxs">
            <div class="box">
              <h1 style={{ fontSize: "5rem", color: "white" }}>
                {" "}
                <span style={{ color: "#47f4c7" }}>NID</span>Ecosystem
              </h1>
              <div class="roww">
                <div class="columnn">
                  <div class="columnn">
                    <div class="cardd">
                      <div class="icon-wrapper">
                        <FaPencilAlt />
                      </div>
                      <h3 style={{ color: "white", textAlign: "start" }}>
                        Registration <br></br>
                        <span
                          style={{
                            color: "#899296",
                            fontSize: "18px",
                            fontWeight: "20rem",
                          }}
                        >
                          This stage require physical apperance of the applicant
                          of <br></br>at registration station A ll inputs nad
                          baometric data will be taken
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="columnn">
                  <div class="columnn">
                    <div class="cardd">
                      <div class="icon-wrapper">
                        <FaUserAlt />
                      </div>
                      <h3 style={{ color: "white", textAlign: "start" }}>
                        {" "}
                        Call Center &Customer Support<br></br>{" "}
                        <span
                          style={{
                            color: "#899296",
                            fontSize: "18px",
                            fontWeight: "20rem",
                          }}
                        >
                          This is also a 24/7 support by differnt languages for{" "}
                          <br></br> customers that need support and information.
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="boxs">
            <div class="box">
              <div class="roww">
                <div class="columnn">
                  <div class="cardd">
                    <div class="icon-wrapper">
                      <FaRegEdit />
                    </div>
                    <h3 style={{ color: "white", textAlign: "start" }}>
                      Pre-registration<br></br>{" "}
                      <span
                        style={{
                          color: "#899296",
                          fontSize: "18px",
                          fontWeight: "20rem",
                        }}
                      >
                        A citizen/resident can use this portal to begin the{" "}
                        <br></br>applicaton for a national ID. Only patial data{" "}
                        <br></br>/demographic and documents can be provided{" "}
                      </span>
                    </h3>
                  </div>
                </div>
                <div class="columnn">
                  <div class="cardd">
                    <div class="icon-wrapper">
                      <FaUserLock />
                    </div>
                    <h3 style={{ color: "white", textAlign: "start" }}>
                      Credential Provision<br></br>
                      <span
                        style={{
                          color: "#899296",
                          fontSize: "18px",
                          fontWeight: "20rem",
                        }}
                      >
                        The National ID Program/Authority will prepare a{" "}
                        <br></br>unique ID / Fayda number prepares<br></br>{" "}
                        credentials for each registerd individual
                      </span>{" "}
                    </h3>
                  </div>
                </div>
                <div class="columnn">
                  <div class="cardd">
                    <button
                      className="btn"
                      style={{
                        color: "white",
                        backgroundColor: "#47f4c7",
                        padding: "1.7rem 5rem",
                        border: "none",
                        fontSize: "20px",
                        borderRadius: "50px",
                        textAlign: "center",
                        marginLeft: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bolder",
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Principles;
