const Review = ({ review }) => {
  return (
    <div className="text-black text-wrap max-h-fit min-w-64 p-4 m-w-4/5 bg-neutral-100 rounded-xl drop-shadow-xl">
      <div>
        <p>{review.name}</p>
        <p>
          {'⭐️'.repeat(review.rating)} ({review.rating}/5)
        </p>
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default Review;
