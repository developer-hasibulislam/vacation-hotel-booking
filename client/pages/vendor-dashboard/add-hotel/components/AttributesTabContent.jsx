import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHotel } from "../../../../features/hotel/hotelSlice";
import { useAddNewHotelMutation } from "../../../../features/hotel/hotelApi";

const AttributesTabContent = () => {
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.hotel);
  const [addNewHotel, { isLoading }] = useAddNewHotelMutation();

  const sections = [
    {
      title: "Property Type",
      items: ["Apartments", "Boats", "Holiday homes"],
    },
    {
      title: "Facilities",
      items: [
        "TV",
        "Kitchen",
        "Shower",
        "Balcony",
        "Parking",
        "Air conditioning",
        "Smoking allowed",
        "Pets allowed",
      ],
    },
    {
      title: "Hotel Services",
      items: ["Apartments", "Boats"],
    },
  ];

  const defaultCheckedItems = sections.map((section) => {
    return section.items.map((item) => {
      const foundItem = hotel.attributes?.find(
        (attr) => attr.title === section.title && attr.items.includes(item)
      );
      return foundItem ? true : false;
    });
  });

  const [checkedItems, setCheckedItems] = useState(defaultCheckedItems);

  const handleCheckboxChange = (sectionIndex, itemIndex) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[sectionIndex] = updatedCheckedItems[sectionIndex] || [];
    updatedCheckedItems[sectionIndex][itemIndex] =
      !updatedCheckedItems[sectionIndex][itemIndex];
    setCheckedItems(updatedCheckedItems);

    // Dispatch the addHotel action with the updated checked sections
    const checkedSections = sections
      .map((section, sectionIndex) => {
        const checkedItemsInSection = section.items.filter((_, itemIndex) => {
          return (
            updatedCheckedItems[sectionIndex] &&
            updatedCheckedItems[sectionIndex][itemIndex]
          );
        });
        if (checkedItemsInSection.length > 0) {
          return { ...section, items: checkedItemsInSection };
        }
        return null;
      })
      .filter((section) => section !== null);

    if (checkedSections.length) {
      dispatch(addHotel({ attributes: checkedSections }));
    }
  };

  const handleSaveChanges = () => {
    addNewHotel(hotel);
  };

  return (
    <div className="col-xl-9 col-lg-11">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="row x-gap-100 y-gap-15 pt-30">
          <div className="col-12">
            <div className="text-18 fw-500">{section.title}</div>
          </div>

          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className="col-lg-2 col-sm-6">
              <div className="row y-gap-15">
                <div className="col-12">
                  <div className="d-flex items-center form-checkbox">
                    <input
                      type="checkbox"
                      name="name"
                      checked={
                        checkedItems[sectionIndex] &&
                        checkedItems[sectionIndex][itemIndex]
                      }
                      onChange={() =>
                        handleCheckboxChange(sectionIndex, itemIndex)
                      }
                    />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                    <div className="text-15 lh-11 ml-10">{item}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="d-inline-block mt-30">
        <button
          type="submit"
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          onClick={handleSaveChanges}
        >
          {isLoading ? (
            "Loading..."
          ) : (
            <>
              Save Changes <div className="icon-arrow-top-right ml-15" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AttributesTabContent;
