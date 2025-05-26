import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Review from './components/Review';

function App() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([{ name: 'hello' }]);

  const handleClick = () => {
    navigate('/pets');
  };

  useEffect(() => {
    fetch('http://localhost:3050/api/v1/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log('Failed to fetch reviews: ', error));
  }, []);

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
      <br />
      <br />
      <br />
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">Reviews</h2>
        <div className="flex justify-center">
          <div className="flex gap-4 p-2 bg-neutral-500/80 rounded-xl w-4/5 overflow-x-auto">
            {reviews.map((review, index) => (
              <Review review={review} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
