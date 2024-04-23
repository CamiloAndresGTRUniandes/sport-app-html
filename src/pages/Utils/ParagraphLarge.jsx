import React, { useState } from "react"; // Import React explicitly

export const ParagraphLarge = ({ text, maxLengthText }) => {
  const [isTruncated, setIsTruncated] = useState(text.length > maxLengthText); // Clear state variable name

  const handleClick = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      {isTruncated && text.length > maxLengthText && (
        <p onClick={handleClick}>{text.substring(0, maxLengthText)}...</p>
      )}

      {!isTruncated && text.length > maxLengthText && (
        <p onClick={handleClick}>{text}</p>
      )}

      {text.length < maxLengthText && <p> {text}</p>}
    </>
  );
};
