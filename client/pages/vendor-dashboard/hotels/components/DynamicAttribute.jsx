/**
 * Title: DynamicAttribute.jsx
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 09, July 2023
 */

import React, { useEffect, useState } from "react";
import SearchFilter from "../../../../components/search-filter/SearchFilter";
import {
  useAddNewAttributeMutation,
  useDeleteAttributeIconMutation,
  useUploadAttributeIconMutation,
} from "../../../../features/attribute/attributeApi";

const IconUploader = ({ attributeIcon, setAttributeIcon }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [error, setError] = useState(null);
  const [uploadIcon, { data }] = useUploadAttributeIconMutation();
  const [deleteIcon] = useDeleteAttributeIconMutation();

  useEffect(() => {
    if (data?.file) {
      setAttributeIcon(data.file);
    }
  }, [data, setAttributeIcon]);

  const handleIconChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        if (img.width !== 24 || img.height !== 24) {
          setError("Invalid icon dimensions. Icon should be 24x24 pixels.");
        } else {
          setSelectedIcon(reader.result);

          const formData = new FormData();
          formData.append("icon", file);
          uploadIcon(formData);
          setAttributeIcon(data?.file);
        }
      };
      img.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const removePreview = () => {
    setSelectedIcon(null);
    deleteIcon(data?.file?.replace(/^http:\/\/localhost:8080\//, ""));
  };

  return (
    <div className="form-input w-100">
      {!selectedIcon ? (
        <>
          <input
            type="file"
            name="icon"
            accept="image/png,image/jpeg"
            onChange={handleIconChange}
            className="bg-light-3"
          />
          {error}
        </>
      ) : (
        <>
          <div className="position-relative">
            <img src={selectedIcon} alt="Preview" className="img-fluid" />
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

const DynamicAttribute = () => {
  const [attributeIcon, setAttributeIcon] = useState("");
  const [attributeItems, setAttributeItems] = useState([]);

  const [addNewAttribute, { isLoading }] = useAddNewAttributeMutation();

  const handleAddAttribute = (event) => {
    event.preventDefault();

    const attributeTitle = event.target.elements.attributeTitle.value;
    const attributeItem = event.target.elements.attributeItem.value;

    const attributeInfo = {
      title: attributeTitle,
      items: [
        {
          item: attributeItem,
          icon: attributeIcon,
        },
      ],
    };

    addNewAttribute(attributeInfo);
    console.log(attributeInfo);
  };

  return (
    <>
      <form
        onSubmit={handleAddAttribute}
        className="bg-light-2 d-flex flex-lg-nowrap flex-wrap gap-3 justify-content-between w-100 mb-5"
      >
        {/* new attribute title */}
        <div className="form-input w-100 bg-light-3">
          <input type="text" name="attributeTitle" />
          <label className="lh-1 text-16 text-light-1">Attribute Title</label>
        </div>
        {/* new attribute items */}
        <SearchFilter setAttributeItems={setAttributeItems} />
        {/* new attribute item */}
        <div className="form-input w-100 bg-light-3">
          <input type="text" name="attributeItem" />
          <label className="lh-1 text-16 text-light-1">Attribute item</label>
        </div>
        {/* new attribute icon */}
        {/* <div className="form-input w-100">
                <input type="file" name="regularPrice" required />
              </div> */}
        <IconUploader
          attributeItems={attributeItems}
          setAttributeIcon={setAttributeIcon}
        />
        <div className="mt-30">
          <button
            type="submit"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white text-nowrap"
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                Add Attribute <div className="icon-arrow-top-right ml-15" />
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default DynamicAttribute;
