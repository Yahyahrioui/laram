import React, { useEffect, useState } from "react";
import data from "./data";
import Role from "./components/Role";
import axios from "axios";

function Home() {
  const [Chapter, setChapter] = useState(0);
  const [ObjectiveCounter, setObjectiveCounter] = useState(0);
  const [Roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles();
  }, []);

  const getRoles = async () => {
    try {
      const res = await axios.get("/role");
      setRoles(res.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const changeChapter = (i) => {
    setChapter(i);
    setObjectiveCounter(0);
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post("/history", {
        Roles,
      });

      res && alert("Uploded successfuly!");
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <div className="container">
      <div className="chapters_container">
        {data.map((chapter, i) => {
          return (
            <h3
              onClick={() => changeChapter(i)}
              className={`chapter_name ${Chapter === i ? "active" : ""}`}
              key={i}
            >
              Chapter: {i + 1}
            </h3>
          );
        })}
      </div>

      <header className="header">
        <h1>{data[Chapter].chapter} </h1>
      </header>

      <div className="objectives_container">
        {data[Chapter].objectives.map((o, i) => {
          return (
            <h4
              key={i}
              onClick={() => setObjectiveCounter(i)}
              className={`objective ${ObjectiveCounter === i ? "active" : ""}`}
            >
              {o.name}
            </h4>
          );
        })}
      </div>

      <div className="current_objective">
        <strong>{data[Chapter].objectives[ObjectiveCounter].content}</strong>
      </div>

      <div className="roles_container">
        <div className="roles_header">
          <h3>Role</h3>
          <h3>Niveau de maturité</h3>
          <h3>Confirmité</h3>
          <h3>Justificatif de non applicabilité</h3>
          <h3>Update</h3>
        </div>
        {data[Chapter].objectives[ObjectiveCounter].roles.map((r, i) => {
          return (
            <Role
              key={i}
              role={r}
              Chapter={Chapter}
              ObjectiveCounter={ObjectiveCounter}
              Roles={Roles}
            />
          );
        })}
      </div>

      <button onClick={handleRegister} className="upload_btn">
        Upload to History
      </button>
    </div>
  );
}

export default Home