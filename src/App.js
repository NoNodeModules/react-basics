import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const changeHandler = (e) => {
    setInput((input) => e.target.value.toLowerCase());
  };

  useEffect(() => {
    var patt = new RegExp(`${input}`);
    let value = originalData.filter((word) =>
      patt.test(word.name.toLowerCase())
    );
    setData((data) => value);
    console.log(input);
  }, [input]);

  useEffect(() => {
    axios.get("https://arlive.us/dev/patpat-cms/api/getSingleUserAvatarDetails/2").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div className="searchContainer">
      <div className="alignCenter">
        <h3>A Simple Example to List & Search Usernames</h3>
        <input
          type="text"
          placeholder="Search the list"
          autocomplete="off"
          name="name"
          onChange={changeHandler}
        />
      </div>
      <div className="dataContainer">
        {data.length > 0  ?
          data.map((element) => <Card id={element.id} name={element.name} />) :
          <h4>No Users match the search criteria</h4>  
        }
      </div>
    </div>
  );
}

export default App;
