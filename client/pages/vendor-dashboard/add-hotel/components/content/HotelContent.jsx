import { useDispatch, useSelector } from "react-redux";
import { addHotel } from "../../../../../features/hotel/hotelSlice";
import { useState } from "react";

const HotelContent = () => {
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.hotel);
  const [name, setName] = useState(hotel?.name || "");
  const [content, setContent] = useState(hotel?.content || "");
  const [youTubeVideoURL, setYouTubeVideoURL] = useState(
    hotel?.youTubeVideoURL || ""
  );

  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              dispatch(addHotel({ name: e.target.value }));
            }}
            required
          />
          <label className="lh-1 text-16 text-light-1">Hotel Name*</label>
        </div>
      </div>
      {/* End Name */}

      <div className="col-12">
        <div className="form-input ">
          <textarea
            required
            rows={5}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              dispatch(addHotel({ content: e.target.value }));
            }}
            defaultValue={""}
          />
          <label className="lh-1 text-16 text-light-1">Content*</label>
        </div>
      </div>
      {/* End Content */}

      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            value={youTubeVideoURL}
            onChange={(e) => {
              setYouTubeVideoURL(e.target.value);
              dispatch(addHotel({ youTubeVideoURL: e.target.value }));
            }}
            required
          />
          <label className="lh-1 text-16 text-light-1">Youtube Video*</label>
        </div>
      </div>
      {/* End youtube Video */}
    </div>
  );
};

export default HotelContent;
