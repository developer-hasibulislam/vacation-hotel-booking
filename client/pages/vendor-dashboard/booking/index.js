import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import BookingTable from "./components/BookingTable";
import { useState } from "react";
import { useAddNewUserMutation } from "../../../features/user/userApi";

const index = () => {
  const [birthday, setBirthday] = useState(getTodayDate);
  const [addNewUser, { isLoading }] = useAddNewUserMutation();

  // Function to get today's date in the format yyyy-MM-dd
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function handleAddVendor(event) {
    event.preventDefault();

    const vendorInfo = {
      username: event.target.username.value,
      name: {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
      },
      email: event.target.email.value,
      password: event.target.password.value,
      dateOfBirth: birthday,
      role: "vendor",
    };

    addNewUser(vendorInfo);
  }

  return (
    <>
      <Seo pageTitle="Vendor History" />
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            {/* start */}
            {/* <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600">Booking History</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div> */}
            {/* End .col-auto */}

            {/* <div className="col-auto">
                <FilterBox />
              </div>
            </div> */}
            {/* End .row */}

            {/* start vendor adding */}
            <form
              className="py-30 px-30 rounded-4 bg-white shadow-3"
              onSubmit={handleAddVendor}
            >
              <div className="border-top-ligh" />

              <div className="col-xl-9">
                <div className="row x-gap-20 y-gap-20">
                  {/* <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        User Name
                      </label>
                    </div>
                  </div> */}
                  {/* End col-12 */}

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" name="firstName" required />
                      <label className="lh-1 text-16 text-light-1">
                        First Name
                      </label>
                    </div>
                  </div>
                  {/* End col-6 */}

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" name="lastName" required />
                      <label className="lh-1 text-16 text-light-1">
                        Last Name
                      </label>
                    </div>
                  </div>
                  {/* End col-6 */}

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="email" name="email" required />
                      <label className="lh-1 text-16 text-light-1">Email</label>
                    </div>
                  </div>
                  {/* End col-6 */}

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="password" name="password" required />
                      <label className="lh-1 text-16 text-light-1">
                        Password
                      </label>
                    </div>
                  </div>
                  {/* End col-6 */}

                  <div className="col-md-6">
                    <div className="form-input">
                      <input
                        type="date"
                        required
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                      />
                      <label className="lh-1 text-16 text-light-1">
                        Birthday
                      </label>
                    </div>
                  </div>
                  {/* End col-6 */}

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" name="username" required />
                      <label className="lh-1 text-16 text-light-1">
                        User Name
                      </label>
                    </div>
                  </div>
                  {/* End col-6 */}
                </div>
              </div>
              {/* End col-xl-9 */}

              <div className="d-inline-block pt-30">
                <button
                  type="submit"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  {isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      Add Vendor
                      <div className="icon-arrow-top-right ml-15" />
                    </>
                  )}
                </button>
              </div>
            </form>
            {/* stop vendor adding */}

            <div className="my-5"></div>

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <BookingTable />
              {/* End tabs */}
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
