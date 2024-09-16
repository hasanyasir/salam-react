import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(1);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>PTCL Group</h3>
    </div>
  );
};

export default User;
