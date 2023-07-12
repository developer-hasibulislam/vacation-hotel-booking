import { useState } from "react";
import Pagination from "../../common/Pagination";

const BookingTable = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = ({ index, item }) => {
    setActiveTab(index);
    console.log(item);
  };

  const tabItems = ["Active Users", "Paused Users", "Trashed Users"];

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                  activeTab === index ? "is-tab-el-active" : ""
                }`}
                onClick={() => handleTabClick({ index, item })}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-3 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>User Name</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>DOB</th>
                    <th>Hotels</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>hasibulislam999</td>
                    <td>Hasibul Islam</td>
                    <td>Vendor</td>
                    <td>04/04/2022</td>
                    <td className="lh-16">0</td>
                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          {/* edit */}
                          <button className="flex-center bg-light-2 rounded-4 size-35">
                            <i className="icon-edit text-16 text-light-1" />
                          </button>
                        </div>
                        <div className="col-auto">
                          {/* delete */}
                          <button className="flex-center bg-light-2 rounded-4 size-35">
                            <i className="icon-trash-2 text-16 text-light-1" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
