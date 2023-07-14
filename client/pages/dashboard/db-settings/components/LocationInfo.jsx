import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../../features/user/userSlice";

const LocationInfo = ({ address }) => {
  const dispatch = useDispatch();
  const addressInfo = useSelector((state) => state?.user?.user?.address);
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    setAddressLine1(addressInfo?.addressLine1 || address?.addressLine1);
    setAddressLine2(addressInfo?.addressLine2 || address?.addressLine2);
    setCity(addressInfo?.city || address?.city);
    setState(addressInfo?.state || address?.state);
    setZipCode(addressInfo?.zipCode || address?.zipCode);
    setCountry(addressInfo?.country || address?.country);
  }, [address, addressInfo]);

  return (
    <form className="col-xl-9">
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input ">
            <input
              type="text"
              required
              value={addressLine1}
              onChange={(e) => {
                const newAddressLine1 = e.target.value;
                setAddressLine1(newAddressLine1);
                dispatch(
                  addUser({
                    address: {
                      addressLine1: newAddressLine1,
                      addressLine2,
                      city,
                      state,
                      zipCode,
                      country,
                    },
                  })
                );
              }}
            />
            <label className="lh-1 text-16 text-light-1">Address Line 1</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
          <div className="form-input ">
            <input
              type="text"
              required
              value={addressLine2}
              onChange={(e) => {
                const newAddressLine2 = e.target.value;
                setAddressLine2(newAddressLine2);
                dispatch(
                  addUser({
                    address: {
                      addressLine1,
                      addressLine2: newAddressLine2,
                      city,
                      state,
                      zipCode,
                      country,
                    },
                  })
                );
              }}
            />
            <label className="lh-1 text-16 text-light-1">Address Line 2</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              required
              value={city}
              onChange={(e) => {
                const newCity = e.target.value;
                setCity(newCity);
                dispatch(
                  addUser({
                    address: {
                      addressLine1,
                      addressLine2,
                      city: newCity,
                      state,
                      zipCode,
                      country,
                    },
                  })
                );
              }}
            />
            <label className="lh-1 text-16 text-light-1">City</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              required
              value={state}
              onChange={(e) => {
                const newState = e.target.value;
                setState(newState);
                dispatch(
                  addUser({
                    address: {
                      addressLine1,
                      addressLine2,
                      city,
                      state: newState,
                      zipCode,
                      country,
                    },
                  })
                );
              }}
            />
            <label className="lh-1 text-16 text-light-1">State</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              required
              value={country}
              onChange={(e) => {
                const newCountry = e.target.value;
                setCountry(newCountry);
                dispatch(
                  addUser({
                    address: {
                      addressLine1,
                      addressLine2,
                      city,
                      state,
                      zipCode,
                      country: newCountry,
                    },
                  })
                );
              }}
            />
            <label className="lh-1 text-16 text-light-1">Select Country</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="number"
              required
              value={zipCode}
              onChange={(e) => {
                const newZipCode = e.target.value;
                setZipCode(newZipCode);
                dispatch(
                  addUser({
                    address: {
                      addressLine1,
                      addressLine2,
                      city,
                      state,
                      zipCode: newZipCode,
                      country,
                    },
                  })
                );
              }}
            />
            <label className="lh-1 text-16 text-light-1">ZIP Code</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LocationInfo;
