import { useState } from "react";
import Pagination from "../../common/Pagination";
import { useGetUserByPaginationQuery } from "../../../../features/user/userApi";

const BookingTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const { data } = useGetUserByPaginationQuery(page);

  const handleTabClick = ({ index, item }) => {
    setActiveTab(index);
    console.log(item);
  };

  const tabItems = ["Active Vendors", "Paused Vendors", "Trashed Vendors"];

  // Filter users based on tab selection
  const filteredUsers = data?.users?.filter((user) => {
    if (activeTab === 0) {
      // Active Vendors
      return user.status === "active";
    } else if (activeTab === 1) {
      // Paused Vendors
      return user.status === "paused";
    } else if (activeTab === 2) {
      // Trashed Vendors
      return user.status === "inactive";
    }
    return true; // Show all users if activeTab is not set
  });

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        {/* Tab controls */}
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

        {/* Table */}
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
                  {filteredUsers?.map((user) => (
                    <tr key={user?._id}>
                      <td>{user?.username}</td>
                      <td>
                        {user?.name?.firstName} {user?.name?.lastName}
                      </td>
                      <td>{user?.role}</td>
                      <td>
                        {user?.dateOfBirth
                          ? new Date(user?.dateOfBirth).toLocaleDateString(
                              "en-US",
                              { day: "numeric", month: "long", year: "numeric" }
                            )
                          : ""}
                      </td>
                      <td className="lh-16">{user?.hotels?.length}</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          {/* edit */}
                          <div className="col-auto">
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination totalPages={Math.ceil(data?.total / 10)} setPage={setPage} />
    </>
  );
};

export default BookingTable;
