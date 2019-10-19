import React, { useState } from "react";

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");
  function handleAddTech() {
    setTechs([...techs, newTech]);
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
