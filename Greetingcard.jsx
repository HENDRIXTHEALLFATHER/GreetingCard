const GreetingCard = ({ title, message }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md w-64 p-4 m-4 text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default GreetingCard;
