import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    relationship: "",
    phone: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  const handleSetData = (text, name) => {
    setData({ ...data, [name]: text });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>Login form</h1>
        
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleSetData(e.target.value, "username")}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleSetData(e.target.value, "password")}
          />
        </label>

        <label>
          Relationship:
          <select 
            value={data.relationship} 
            onChange={(e) => handleSetData(e.target.value, "relationship")}
          >
            <option className="option" value="" disabled>Select status</option>
            <option className="option" value="single">Single</option>
            <option className="option" value="married">Married</option>
            <option className="option" value="other">Other</option>
          </select>
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleSetData(e.target.value, "phone")}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;