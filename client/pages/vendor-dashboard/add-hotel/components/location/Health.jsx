/**
 * Title: Health.jsx
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 07, July 2023
 */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHotel } from "../../../../../features/hotel/hotelSlice";

const Health = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([{ id: Date.now() }]);
  const [healthData, setHealthData] = useState([
    {
      id: Date.now(),
      beachName: "",
      beachContent: "",
      beachDistance: "",
      beachCountry: "",
    },
  ]);

  const addItem = () => {
    const newItem = { id: Date.now() };
    setItems([...items, newItem]);
    setHealthData([...healthData, newItem]);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    const updatedHealthData = healthData.filter((item) => item.id !== id);
    setHealthData(updatedHealthData);
  };

  const handleChange = (index, field, value) => {
    const updatedHealthData = [...healthData];
    const updatedItem = { ...updatedHealthData[index] };
    updatedItem[field] = value;
    updatedHealthData[index] = updatedItem;
    setHealthData(updatedHealthData);

    // Update redux state
    dispatch(addHotel({ healthData: updatedHealthData }));
  };

  return (
    <div className="mt-30">
      <div className="fw-500 mb-20">Health</div>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-5 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Name</th>
              <th>Content</th>
              <th>Distance</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td className="col-2">
                  <div className="form-input">
                    <input
                      type="text"
                      value={healthData[index].beachName}
                      onChange={(e) =>
                        handleChange(index, "beachName", e.target.value)
                      }
                      required
                    />
                    <label className="lh-1 text-16 text-light-1">
                      Sunny beach
                    </label>
                  </div>
                </td>
                <td className="col-6">
                  <div className="form-input">
                    <textarea
                      value={healthData[index].beachContent}
                      onChange={(e) =>
                        handleChange(index, "beachContent", e.target.value)
                      }
                      required
                      rows={5}
                      defaultValue={""}
                    />
                    <label className="lh-1 text-16 text-light-1">Content</label>
                  </div>
                </td>
                <td className="col-2">
                  <div className="form-input">
                    <input
                      type="text"
                      value={healthData[index].beachDistance}
                      onChange={(e) =>
                        handleChange(index, "beachDistance", e.target.value)
                      }
                      required
                    />
                    <label className="lh-1 text-16 text-light-1">
                      Sunny beach
                    </label>
                  </div>
                </td>
                <td className="col-2">
                  <div className="form-input">
                    <input
                      type="text"
                      value={healthData[index].beachCountry}
                      onChange={(e) =>
                        handleChange(index, "beachCountry", e.target.value)
                      }
                      required
                    />
                    <label className="lh-1 text-16 text-light-1">
                      Select Country
                    </label>
                  </div>
                </td>
                <td className="col-auto">
                  <button
                    className="flex-center bg-light-2 rounded-4 size-35"
                    onClick={() => deleteItem(item.id)}
                  >
                    <i className="icon-trash-2 text-16 text-light-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-end">
        <button
          className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20"
          onClick={addItem}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Health;
