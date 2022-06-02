import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Tabs from "../components/Tabs/Tabs";
import axios from "axios";
import Charts from "../components/Charts/Charts";
import Footer from "../components/Footer/Footer";
import "./UserPage.css";
import Issues from "../components/Issues/Issues";

function UserPage() {
  const [input, setInput] = useState("bootstrap");
  const [search, setSearch] = useState([]);
  console.log(search);

  const getData = () => {
    // event.preventDefault();

    axios
      .get(`https://api.github.com/search/repositories?q=${input}`)
      .then((response) => {
        console.log(response);
        const myRepo = response.data;
        setSearch(myRepo);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event) => {
    // event.preventDefault();
    const { value } = event.target;
    setInput(value);
    // console.log(value)
  };

  return (
    <div>
      <NavBar value={input} handleChange={handleChange} />
      <Tabs />
      {search.items?.map((item, index) => (
        <section key={item.id}>
          <div className="repositories">
            <div className="repo">
              <div>
                <div className="title">
                  <i className="fa fa-book pr-1" />
                  <a href={item.html_url}>
                    <span>{item.name}</span>
                  </a>
                </div>
                <span className="description">{item.description}</span>
              </div>
              <div className="d-flex">
                <div className="subitem">
                  <i className="fa fa-code pr-1" />
                  <span>{item.language}</span>
                </div>
                <div className="subitem">
                  <i className="fa fa-star pr-1" />
                  <span>{item.stargazers_count}</span>
                </div>
                <div className="subitem">
                  <i className="fa fa-code-fork pr-1" />
                  <span>{item.forks_count}</span>
                </div>
                <div className="subitem">
                  <i className="far fa-copy pr-1"></i>
                  <span>{item.owner.url}</span>
                </div>
                <div className="subitem">
                  <i className="fal fa-dot-circle pr-1"></i>
                  <span>{item.open_issues_count}</span>
                </div>
              </div>
            </div>
            <br />
          </div>
        </section>
      ))}
      <section>
        <h4> Issues</h4>
        <Issues />
      </section>
      <section className="">
        <Charts />
      </section>
      <Footer />
    </div>
  );
}

export default UserPage;
