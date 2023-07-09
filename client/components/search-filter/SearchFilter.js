import React, { useState } from "react";
import OutsideClickHandler from "../outside-click/OutsideClickHandler";

const SearchFilter = ({ setAttributeItems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const suggestions = ["Property Types", "Facilities", "Hotel Services"];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredSuggestions(filtered);
  };

  const boldSearchTerm = (text) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<b>$1</b>");
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setIsOpen(false);
  };

  return (
    <div className="form-input w-100 bg-light-3 position-relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onClick={handleClick}
      />
      <label className="lh-1 text-16 text-light-1">Attribute items</label>

      {isOpen && (
        <div
          className="position-absolute w-100 bg-light-3 top-100 border mt-2 rounded px-2 py-1"
          style={{ maxHeight: "500px", zIndex: "999" }}
        >
          <OutsideClickHandler onOutsideClick={handleOutsideClick}>
            <ul>
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: boldSearchTerm(suggestion),
                  }}
                  onClick={() => handleSuggestionClick(suggestion)}
                />
              ))}
            </ul>
          </OutsideClickHandler>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
