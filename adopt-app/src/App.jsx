import { useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pets');
  };
  return (
    <div className="pt-8 px-4 ">
      <h1 className="text-3xl font-bold text-center mb-4">Adopt-a-Pet</h1>
      <div className="flex justify-center">
        <img
          className="w-4/5 rounded-lg max-w-6xl"
          src="src/assets/HeroImage1.png"
        />
      </div>
      <div className="flex justify-center">
        <p className="text-center max-w-lg">
          The pet Adopt-a-Pet app is a friendly application to help you find
          your next best friend. You can view all pets looking for a home by
          clicking on the "See all Pets" button below.
        </p>
      </div>
      <div className="flex justify-center m-3">
        <button className="w-64 bg-green-500/90" onClick={handleClick}>
          See all Pets
        </button>
      </div>
    </div>
  );
}

export default App;
