import "./styles/App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/`);
      const data = await res.json();
      console.log([...data]);
      setUser([...data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>view client from infocent</h1>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>name</th>
          <th>creteAt</th>
        </tr>
        {user.map((value) => (
          <tr>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.lastname}</td>
            <td>{value.creteAt}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
