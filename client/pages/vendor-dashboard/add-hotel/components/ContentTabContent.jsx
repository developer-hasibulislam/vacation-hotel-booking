import HotelContent from "./content/HotelContent";
// import HotelPolicy from "./content/HotelPolicy";
import BannerUploader from "./content/BannerUploader";
import FeaturedUploader from "./content/FeaturedUploader";
import GalleryUploader from "./content/GalleryUploader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addHotel } from "../../../../features/hotel/hotelSlice";

const ContentTabContent = () => {
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.hotel);

  const [formData, setFormData] = useState({
    guests: hotel?.room?.guests || 0,
    beds: hotel?.room?.beds || 0,
    bedrooms: hotel?.room?.bedrooms || 0,
    bathrooms: hotel?.room?.bathrooms || 0,
  });

  useEffect(() => {
    // Dispatch the addHotel action whenever formData changes
    const { guests, beds, bedrooms, bathrooms } = formData;

    dispatch(
      addHotel({
        room: { guests, beds, bedrooms, bathrooms },
      })
    );
  }, [formData, dispatch]);

  return (
    <>
      <div className="col-xl-10">
        <div className="text-18 fw-500 mb-10">Hotel Content*</div>
        <HotelContent />
        {/* End HotelContent */}

        <div className="mt-30">
          <div className="fw-500">Banner*</div>
          <BannerUploader />
        </div>
        {/* End BannerUploader */}

        <div className="mt-30">
          <div className="fw-500">Gallery*</div>
          <GalleryUploader />
        </div>
        {/* End GalleryUploader */}

        <div className="border-top-light mt-30 mb-30" />

        {/* <div className="text-18 fw-500 mb-10">Hotel Policy</div> */}
        {/* <HotelPolicy /> */}
        {/* End hotelpolicy */}

        <div className="mt-30">
          <div className="fw-500">Featured*</div>
          <FeaturedUploader />
        </div>
        {/* End FeaturedUploader */}

        <div className="border-top-light mt-30 mb-30" />

        <div className="mt-30">
          <div className="fw-500">People to stay*</div>
          <div className="row x-gap-20 y-gap-20">
            <div className="col-md-6">
              <div className="form-input">
                <input
                  type="number"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: Number(e.target.value) })
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  Number of Guests*
                </label>
              </div>
            </div>
            {/* End col-6 */}
            <div className="col-md-6">
              <div className="form-input">
                <input
                  type="number"
                  name="beds"
                  required
                  value={formData.beds}
                  onChange={(e) =>
                    setFormData({ ...formData, beds: Number(e.target.value) })
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  Number of Beds/Bedroom*
                </label>
              </div>
            </div>
            {/* End col-6 */}
            <div className="col-md-6">
              <div className="form-input">
                <input
                  type="number"
                  name="bedrooms"
                  required
                  value={formData.bedrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bedrooms: Number(e.target.value) })
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  Number of Bedrooms*
                </label>
              </div>
            </div>
            {/* End col-6 */}
            <div className="col-md-6">
              <div className="form-input">
                <input
                  type="number"
                  name="bathrooms"
                  required
                  value={formData.bathrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bathrooms: Number(e.target.value) })
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  Number of Bathrooms*
                </label>
              </div>
            </div>
            {/* End col-6 */}
          </div>
        </div>
        {/* <div className="d-inline-block pt-30">
          <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ContentTabContent;
