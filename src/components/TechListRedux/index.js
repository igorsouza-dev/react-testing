import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTech } from "../../store/modules/techs/actions";

export default function TechListRedux() {
  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);
  const [newTech, setNewTech] = useState("");

  function handleAddTech() {
    dispatch(addTech(newTech));
    setNewTech("");
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <label htmlFor="tech">Tech</label>
      <input
        type="text"
        value={newTech}
        id="tech"
        onChange={e => setNewTech(e.target.value)}
      />
      <button onClick={handleAddTech}>Add</button>
    </form>
  );
}
