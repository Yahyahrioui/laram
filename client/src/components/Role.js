import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Role({ role, Chapter, ObjectiveCounter, Roles }) {
    const [ActivateUpdate, setActivateUpdate] = useState(false);
    const [Confirm, setConfirm] = useState('');
    const [Maitrise, setMaitrise] = useState('');
    const [Justify, setJustify] = useState('')
    const maitrise = ['N/A', 'Aucun', 'Initial', 'Reproductible', 'Défini', 'Maitrsé', 'Optimisé']

    const content_was_changed = () => {
        setActivateUpdate(true)
    }

    const handleMaitrise = e => {
        setMaitrise(e.target.value);
        content_was_changed()
    }

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
    }, [Maitrise])


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
    
    
    const handleJustify = e => {
        setJustify(e.target.value)
        setActivateUpdate(true)
    }

    const updateRole = async (e, id) => {
      try {
        await axios.put('/role', 
        { 
          id: id, 
          confirm: Confirm,
          maitrise: Maitrise,
          justify: Justify 
        })
        
        setActivateUpdate(false)
        alert("Updated successfuly!")
      } catch (err) {
        alert(err.response.data.message);
      }
    }

    if (Roles.length === 0) return <h1>Loading...</h1>;

    return (
      <div className="role_container">
        <p>{role.role_name}</p>

        <select onChange={handleMaitrise} value={Maitrise}>
          {maitrise.map((m, i) => {
            return (
              <option key={i} value={m} defaultValue={m?.toLocaleLowerCase() === Maitrise?.toLocaleLowerCase()}>
                {m}
              </option>
            );
          })}
        </select>

        <span>{Confirm}</span>

        <textarea
          onChange={(e) => handleJustify(e)}
          value={Justify}
          cols="30"
          rows="10"
        ></textarea>

        {ActivateUpdate ? (
          <button className="update_role" onClick={e => updateRole(e, role.id)}>Update</button>
        ) : (
          <div className="inactive_update_rote">Update</div>
        )}
      </div>
    );
}

export default Role