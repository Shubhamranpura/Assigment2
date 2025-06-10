import React, { useState } from 'react';

function NestedBox({ value }) {
  const [boxColor, setBoxColor] = useState("");

  if (value <= 0) return null 

  const handleInputChange = (e) => {
    setBoxColor(e.target.value);
  };


  return (
    <div className={`w-[80%] h-[80%] mb-[10px] mx-auto border-2 border-black rounded-lg `}
      style={{ backgroundColor: boxColor }}
    >
      <input
        type="text"
        name="boxcol"
        id="boxcol"
        value={boxColor}

        className="m-2 border-4 w-[150px] border-black p-2 text-2xl rounded-lg text-black"
        onChange={handleInputChange}
      />

      <NestedBox value={value - 1} />
    </div>
  );
}

export default NestedBox;



