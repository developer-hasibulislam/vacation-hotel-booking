import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHotel } from "../../../../features/hotel/hotelSlice";

const AttributesTabContent = () => {
  const dispatch = useDispatch();
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

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (sectionIndex, itemIndex) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[sectionIndex] = updatedCheckedItems[sectionIndex] || [];
    updatedCheckedItems[sectionIndex][itemIndex] =
      !updatedCheckedItems[sectionIndex][itemIndex];
    setCheckedItems(updatedCheckedItems);
  };

  const handleSaveChanges = () => {
    const checkedSections = sections
      .map((section, sectionIndex) => {
        const checkedItemsInSection = section.items.filter(
          (_, itemIndex) => {
            return (
              checkedItems[sectionIndex] &&
              checkedItems[sectionIndex][itemIndex]
            );
          }
        );
        if (checkedItemsInSection.length > 0) {
          return { ...section, items: checkedItemsInSection };
        }
        return null;
      })
      .filter((section) => section !== null);

    checkedSections.length &&
      dispatch(addHotel({ attributes: checkedSections }));
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
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </div>
  );
};

export default AttributesTabContent;
