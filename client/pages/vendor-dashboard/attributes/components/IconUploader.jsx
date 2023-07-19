/**
 * Title: IconUploader.jsx
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 08, July 2023
 */

import React, { useState } from "react";

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
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {!selectedIcon ? (
            <>
              <h4>Upload SVG Icon</h4>
              <input
                type="file"
                accept="image/svg+xml"
                onChange={handleIconChange}
                className="bg-light-3"
              />
            </>
          ) : (
            <>
              <h4>Preview</h4>
              <div className="position-relative">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={removePreview}
                >
                  Remove
                </button>
                <img
                  src={selectedIcon}
                  alt="Preview"
                  className="img-fluid"
                  style={{ maxHeight: "200px" }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IconUploader;
