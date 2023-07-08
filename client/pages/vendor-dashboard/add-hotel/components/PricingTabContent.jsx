import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHotel } from "../../../../features/hotel/hotelSlice";
import { useEffect } from "react";

const PricingTabContent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    regularPrice: 0,
    extraPrice: false,
    serviceFee: false,
    checkInTime: "",
    checkOutTime: "",
    minimumAdvanceReservation: 0,
    minimumDayStay: 0,
  });

  useEffect(() => {
    // Dispatch the addHotel action whenever formData changes
    const {
      regularPrice,
      extraPrice,
      serviceFee,
      checkInTime,
      checkOutTime,
      minimumAdvanceReservation,
      minimumDayStay,
    } = formData;

    const data = {
      price: {
        regularPrice: parseInt(regularPrice),
        extraPrice,
        serviceFee,
      },
      checkInTime,
      checkOutTime,
      minimumAdvanceReservation: parseInt(minimumAdvanceReservation),
      minimumDayStay: parseInt(minimumDayStay),
    };

    formData.regularPrice &&
      dispatch(
        addHotel({
          price: data.price,
          checkInTime,
          checkOutTime,
          minimumAdvanceReservation,
          minimumDayStay,
        })
      );
  }, [formData, dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  return (
    <div className="col-xl-9 col-lg-11">
      <form>
        <div className="row x-gap-20 y-gap-20">
          <div className="col-12">
            <div className="text-18 fw-500 mb-10">Pricing*</div>
            <div className="form-input">
              <input
                type="number"
                step={0.01}
                name="regularPrice"
                value={formData.regularPrice}
                onChange={handleChange}
                required
              />
              <label className="lh-1 text-16 text-light-1">Hotel Price*</label>
            </div>

            <div className="d-flex mt-20">
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  name="extraPrice"
                  checked={formData.extraPrice}
                  onChange={handleChange}
                />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
              </div>
              <div className="text-15 lh-11 ml-10">Enable extra price</div>
            </div>

            <div className="fw-500 mt-30">Enable service fee</div>

            <div className="d-flex mt-10">
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  name="serviceFee"
                  checked={formData.serviceFee}
                  onChange={handleChange}
                />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
              </div>
              <div className="text-15 lh-11 ml-10">Enable extra price</div>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}

        <div className="text-18 fw-500 mb-10 pt-30">
          Check in / Check out time
        </div>

        <div className="row x-gap-20 y-gap-20">
          <div className="col-md-6">
            <div className="form-input">
              <input
                type="text"
                name="checkInTime"
                value={formData.checkInTime}
                onChange={handleChange}
                required
              />
              <label className="lh-1 text-16 text-light-1">
                Time for check in
              </label>
            </div>
          </div>
          {/* End col-6 */}
          <div className="col-md-6">
            <div className="form-input">
              <input
                type="text"
                name="checkOutTime"
                value={formData.checkOutTime}
                onChange={handleChange}
                required
              />
              <label className="lh-1 text-16 text-light-1">
                Time for check out
              </label>
            </div>
          </div>
          {/* End col-6 */}
          <div className="col-md-6">
            <div className="form-input">
              <input
                type="number"
                name="minimumAdvanceReservation"
                value={formData.minimumAdvanceReservation}
                onChange={handleChange}
                required
              />
              <label className="lh-1 text-16 text-light-1">
                Minimum advance reservations
              </label>
            </div>
          </div>
          {/* End col-6 */}
          <div className="col-md-6">
            <div className="form-input">
              <input
                type="number"
                name="minimumDayStay"
                value={formData.minimumDayStay}
                onChange={handleChange}
                required
              />
              <label className="lh-1 text-16 text-light-1">
                Minimum day stay requirements
              </label>
            </div>
          </div>
          {/* End col-6 */}
        </div>
        {/* End row */}

        {/* <div className="col-md-12 d-inline-block mt-30">
          <button
            type="submit"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default PricingTabContent;
