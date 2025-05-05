import React, { useState } from 'react';

const PetContainer = ({ value }) => {
  const { name, id, age, description } = value;
  const [isAdopted, setIsAdopted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    if (
      confirm(
        `Confirm you would like to adopt ${name}. \n Press Enter to Accept or Escape to Exit`
      ) == true
    ) {
      setIsAdopted(true);
    }
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex gap-4 min-h-32 p-4 m-w-4/5 bg-neutral-100 rounded-xl drop-shadow-xl">
      <div>
        <img
          src={`src/assets/${id}.png`}
          alt=""
          className="rounded max-h-48 min-h-28 rounded-xl min-w-40"
        />
      </div>
      <div className="text-black">
        <p>Name: {name}</p>
        <p>Age: {age}</p>

        {isVisible ? (
          <div className="pb-2">
            <button
              className="bg-blue-500/70 text-white"
              onClick={() => setIsVisible(!isVisible)}
            >
              See less information -
            </button>

            <p>ID: {id}</p>
            <p>Description: {description}</p>
          </div>
        ) : (
          <div className="pb-2">
            <button
              className="bg-blue-500/70 text-white"
              onClick={() => setIsVisible(!isVisible)}
            >
              See more information +
            </button>
          </div>
        )}

        {isAdopted ? (
          <button className="bg-gray-500/80 text-white hover:border-white w-30">
            Adopted
          </button>
        ) : (
          <button
            className="bg-orange-500/80 text-white w-30"
            onClick={() => handleClick()}
          >
            Adopt
          </button>
        )}
      </div>
    </div>
  );
};

export default PetContainer;
