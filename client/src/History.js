import React, { useEffect, useState } from "react";
import data from "./data";
import HistoryRole from "./components/HistoryRole";
import axios from "axios";

function History() {
  const [Chapter, setChapter] = useState(0);
  const [ObjectiveCounter, setObjectiveCounter] = useState(0);
  const [Roles, setRoles] = useState([]);
  const [Data, setData] = useState([]);
  const [CurrentDate, setCurrentDate] = useState('2023-07-06T19:54:08.661Z');
  const [HistoryId, setHistoryId] = useState('');

  const getRoles = async () => {
    try {
      const res = await axios.get("/api/history");
      setData(res.data.data);
      setRoles(res.data.data[0].history[0].Roles);
      setHistoryId(res.data.data[0]._id)
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHistory = async (id) => {
    try {
      if(window.confirm('Are you sure you want to delete this history?')) {
        const res = await axios.delete(`/api/history/${id}`);
        if(res) alert('Deleted successfuly!')
        window.location.href = '/history'
      }
    }
    catch (err) {
      console.log(err);
    };
  }

  const getRolesByDate = async () => {
    if(Data.length > 0) {
        setRoles(
          Data?.find((d) => d.createdAt === CurrentDate).history[0].Roles
        );
        setHistoryId(Data?.find((d) => d.createdAt === CurrentDate)._id)  
    }
  };

  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {
    getRolesByDate()
  }, [CurrentDate]);

  const changeChapter = (i) => {
    setChapter(i);
    setObjectiveCounter(0);
  };

  return (
    <div className="container">
      <div className="history_btns_container">
        <select onChange={e => setCurrentDate(e.target.value)}>
          {Data.map((d, i) => {
            return (
              <option key={d._id} value={d.createdAt}>
                {`${
                  new Date(d?.createdAt).getDate() < 10
                    ? "0" + new Date(d?.createdAt).getDate()
                    : new Date(d?.createdAt).getDate()
                }-${
                  new Date(d?.createdAt).getDate() < 10
                    ? "0" + new Date(d?.createdAt).getMonth()
                    : new Date(d?.createdAt).getMonth()
                }-${new Date(d?.createdAt).getFullYear()} at ${
                  new Date(d?.createdAt).getHours() < 10
                    ? "0" + new Date(d?.createdAt).getHours()
                    : new Date(d?.createdAt).getHours()
                }:${
                  new Date(d?.createdAt).getMinutes() < 10
                    ? "0" + new Date(d?.createdAt).getMinutes()
                    : new Date(d?.createdAt).getMinutes()
                }`}
              </option>
            );
          })}
        </select>
        <button onClick={() => deleteHistory(HistoryId)}>Delete</button>
      </div>

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
            <HistoryRole
              key={i}
              role={r}
              Chapter={Chapter}
              ObjectiveCounter={ObjectiveCounter}
              Roles={Roles}
            />
          );
        })}
      </div>
    </div>
  );
}

export default History;
