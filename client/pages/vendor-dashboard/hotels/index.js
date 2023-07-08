/**
 * Title: index.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 08, July 2023
 */

import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import BookingTable from "./components/BookingTable";
import React, { useState } from "react";
import SearchFilter from "../../../components/search-filter/SearchFilter";

const IconUploader = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedIcon(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const removePreview = () => {
    setSelectedIcon(null);
  };

  return (
    <div className="form-input w-100">
      {!selectedIcon ? (
        <>
          <input
            type="file"
            accept="image/svg+xml"
            onChange={handleIconChange}
            required
          />
        </>
      ) : (
        <>
          <div className="position-relative">
            <img
              src={selectedIcon}
              alt="Preview"
              className="img-fluid"
              style={{ height: "100px", objectFit: "cover" }}
            />
            <button
              className="btn btn-danger btn-sm position-absolute top-0 start-100 p-0 px-1"
              onClick={removePreview}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ height: "1rem" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const index = () => {
  return (
    <>
      <Seo pageTitle="Vendor Hotels" />
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
            {/* Header Part Start */}
            {/* <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600">All Hotels</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div> */}
            {/* End .col-auto */}

            {/* <div className="col-auto">
                <Link
                  href="#"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  Add Hotels <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
            </div> */}
            {/* Header Part End */}
            {/* End .row */}

            {/* Dynamic Attributes Starts */}
            <form className="bg-light-2 d-flex flex-lg-nowrap flex-wrap gap-3 justify-content-between w-100 mb-5">
              {/* new attribute title */}
              <div className="form-input w-100">
                <input type="text" />
                <label className="lh-1 text-16 text-light-1">
                  Attribute Title
                </label>
              </div>
              {/* new attribute items */}
              <SearchFilter />
              {/* new attribute item */}
              <div className="form-input w-100">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Attribute item
                </label>
              </div>
              {/* new attribute icon */}
              {/* <div className="form-input w-100">
                <input type="file" name="regularPrice" required />
              </div> */}
              <IconUploader />
              <div className="mt-30">
                <button
                  type="submit"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white text-nowrap"
                >
                  Add Attribute <div className="icon-arrow-top-right ml-15" />
                </button>
              </div>
            </form>
            {/* Dynamic Attributes Stops */}

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
