import axios from "axios";
import React, { useEffect, useState } from "react";

function HistoryRole({ role, Chapter, ObjectiveCounter, Roles }) {
  const [ActivateUpdate, setActivateUpdate] = useState(false);
  const [Confirm, setConfirm] = useState("");
  const [Maitrise, setMaitrise] = useState("");
  const [Justify, setJustify] = useState("");

  useEffect(() => {
    switch (Maitrise) {
      case "N/A":
        setConfirm("N/A");
        break;

      case "Aucun":
        setConfirm("Non_conforme");
        break;

      case "Initial":
        setConfirm("Non_conforme");
        break;

      case "Reproductible":
        setConfirm("Partielle");
        break;

      case "Défini":
        setConfirm("Partielle");
        break;

      case "Maitrsé":
        setConfirm("Totale");
        break;

      case "Optimisé":
        setConfirm("Totale");
        break;

      default:
        break;
    }
  }, [Maitrise]);

  useEffect(() => {
    setActivateUpdate(false);
    setConfirm("");
    setMaitrise("");
    setJustify("");

    if (Roles) {
      const current_role = Roles.find((r) => r._id === role.id);
      setConfirm(current_role?.confirm ? current_role.confirm : "");
      setMaitrise(current_role?.maitrise ? current_role.maitrise : "");
      setJustify(current_role?.justify ? current_role.justify : "");
    }
  }, [Roles, Chapter, ObjectiveCounter]);

  if (Roles.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="role_container">
      <p>{role.role_name}</p>
      <p>{Maitrise ? Maitrise : '-'}</p>
      <p>{Confirm ? Confirm : '-'}</p>
      <p>{Justify ? Justify : '-'}</p>
    </div>
  );
}

export default HistoryRole;
