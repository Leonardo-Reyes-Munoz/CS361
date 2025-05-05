import React, { useState } from 'react';
import PetsDisplay from './components/PetsDisplay';
import { petData } from './data/petData';
import { useNavigate } from 'react-router';

const Pets = () => {
  const [selected, setSelected] = useState('');
  const [data, setData] = useState(petData);
  const navigate = useNavigate();

  const handleOnFilter = (e) => {
    setSelected(e.target.value);

    if (e.target.value == 'all') {
      setData(petData);
      return;
    }

    let result = petData.filter(checkSelected);

    function checkSelected(pet) {
      return pet.species == e.target.value;
    }

    setData(result);
  };

  const handleOnSort = () => {
    if (
      confirm(
        `Once sorted, the sort CANNOT be undone. \n Press Enter to Accept or Escape to Exit`
      ) == true
    ) {
      let sortedData = data.sort(function (a, b) {
        return a.age - b.age;
      });

      setData(sortedData);
    }
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="pt-8 px-4 m-h-screen">
      <button
        className="text-white underline"
        onClick={() => handleReturnHome()}
      >
        Return Home
      </button>
      <h1 className="text-3xl font-bold text-center mb-4">Pets</h1>
      <div className="flex justify-center">
        <img
          className="w-4/5 rounded-lg max-w-6xl"
          src="src/assets/HeroImage2.png"
        />
      </div>
      <div className="flex gap-4 justify-center m-3">
        <button className="w-64 bg-green-500/90" onClick={() => handleOnSort()}>
          Sort Pets by Age
        </button>
        <label className="flex justify-center" htmlFor="filter"></label>
        <select
          className="w-64 bg-green-500/90 rounded"
          name="filter"
          id="filter"
          defaultValue={''}
          onChange={(e) => handleOnFilter(e)}
        >
          <option value="all">-- Filter by Species --</option>
          <option value="all">All Pets</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
        </select>
      </div>
      <div className="flex justify-center">
        <PetsDisplay petData={data} />
      </div>
    </div>
  );
};

export default Pets;
