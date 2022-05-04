import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

const Main = () => {
  const [apidata, setapiData] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((res) => {
        console.log(res.data.result);
        setapiData(res.data.result);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="" style={{ backgroundColor: "aquamarine" }}>
        <div
          className="btn-container"
          style={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <button onClick={() => setModal(true)} className="btn">
            Company Info
          </button>
        </div>
      </div>
      <div className="main-container">
        <div className="cards-container">
          {loading ? (
            <div style={{ textAlign: "center" }}>Loading...</div>
          ) : (
            <>
              {apidata.map((data, index) => {
                const mydate = new Date(data.releasedDate * 1000);
                console.log(mydate);
                let months = [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "June",
                  "July",
                  "Aug",
                  "Sept",
                  "Oct",
                  "Nov",
                  "Dec",
                ];
                let month = months[mydate.getMonth()];
                // let year = mydate.getFullYear();
                let day = mydate.getDate();

                let fullDate = `${day} ${month}`;
                return (
                  <section key={index} className="card">
                    <div className="content">
                      <div className="votes">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/25/25678.png"
                          alt=""
                          className="votes-logo"
                        />
                        <span className="votes-num">{data.totalVoted}</span>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/57/57055.png"
                          alt=""
                          className="votes-logo"
                        />

                        <p className="">Votes</p>
                      </div>
                      <div className="movie-poster">
                        <img
                          src={data.poster}
                          alt={data.title}
                          className="poster-img"
                        />
                      </div>
                      <div className="movie-details">
                        <h3 className="movie-name">{data.title}</h3>
                        <p>
                          <span className="sub-title">Genre: </span>{" "}
                          {data.genre}
                        </p>
                        <p>
                          <span className="sub-title">Director: </span>{" "}
                          {data.director.join(", ")}
                        </p>
                        <p>
                          <span className="sub-title">Starring: </span>{" "}
                          {data.stars.join(", ")}
                        </p>
                        <div className="movie-running">
                          <span className="">{data.runTime} Mins</span>
                          <span>|</span>
                          <span className="">{data.language}</span>
                          <span>|</span>
                          <span className="">{fullDate}</span>
                        </div>
                        <div className="movie-links">
                          <a className="movie-link" href="/#">
                            {data.pageViews} views
                          </a>
                          <span>|</span>
                          <a className="movie-link" href="/#">
                            Voted by {data.voted.length} People
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-btn-container">
                      <a className="link-btn" href="/#">
                        Watch Trailer
                      </a>
                    </div>
                    <hr />
                  </section>
                );
              })}
            </>
          )}
        </div>
      </div>

      {/* modal */}
      {modal && (
        <section className="modal">
          <div className="company-info">
            <img
              className="modal-close"
              onClick={() => setModal(false)}
              src="https://cdn-icons-png.flaticon.com/512/271/271203.png"
              alt=""
            />
            <div className="">
              <h2>Company Info</h2>
              <div className="">
                <span className="modal-title">Company: </span> Geeksynergy
                Technologies Pvt Ltd
              </div>
              <div className="">
                <span className="modal-title">Address: </span> Sanjayanagar,
                Bengaluru-56
              </div>
              <div className="">
                <span className="modal-title">Phone: </span> XXXXXXXXX09
              </div>
              <div className="">
                <span className="modal-title">Email: </span> XXXXXX@gmail.com
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Main;
