import React from 'react';

import PetContainer from './PetContainer';

const PetsDisplay = ({ petData }) => {
  return (
    <div className="bg-neutral-500/80 rounded-xl w-4/5">
      {petData.map((pet) => (
        <div key={pet.id} className="p-4">
          <PetContainer value={pet} />
        </div>
      ))}
    </div>
  );
};

export default PetsDisplay;
