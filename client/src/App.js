import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState("");
  const [lists, setLists] = useState([]);
  const [updateFood, setUpdateFood] = useState("");

  // post data
  const addFood = () => {
    // console.log(foodName, days);
    axios.post("http://localhost:4000/insert", {
      foodName: foodName,
      days: days,
    });
  };

  // get data from db
  useEffect(() => {
    axios
      .get("http://localhost:4000/read")
      .then((response) => {
        setLists(response.data);
        console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  // update data

  const updatedFood = (id) => {
    axios.put("http://localhost:4000/update", {
      id: id,
      newFoodName: updateFood,
    });
  };

  // deleted item

  const deletedItem = (id) => {
    axios.delete(`http://localhost:4000/delete/${id}`);
  };

  return (
    <>
      <div>
        <div>
          <label>Food Name : </label>
          <input
            type="text"
            placeholder="enter food.."
            onChange={(e) => setFoodName(e.target.value)}
          />
        </div>
        <div>
          <label>Days : </label>
          <input
            type="number"
            placeholder="enter days.."
            onChange={(e) => setDays(e.target.value)}
          />
        </div>
        <div>
          <button onClick={addFood}>Add Food</button>
        </div>

        <hr />
        {lists.map((list) => {
          return (
            <div key={list.id} className="border py-5">
              <h3>{list.foodName}</h3>
              <h4>{list.daysSinceIAte}</h4>
              <input
                type="text"
                placeholder="update food.."
                onChange={(e) => setUpdateFood(e.target.value)}
              />
              <button onClick={() => updatedFood(list._id)}>Update</button>
              <button onClick={() => deletedItem(list._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
