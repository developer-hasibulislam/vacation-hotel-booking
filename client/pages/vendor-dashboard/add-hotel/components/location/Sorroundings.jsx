import { useDispatch } from "react-redux";
import { addHotel } from "../../../../../features/hotel/hotelSlice";

const Sorroundings = () => {
  const dispatch = useDispatch();
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            onChange={(e) =>
              dispatch(
                addHotel({
                  Surroundings: [{ surroundingTitle: e.target.value }],
                })
              )
            }
            required
          />
          <label className="lh-1 text-16 text-light-1">
            Hotel rating standard
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sorroundings;
