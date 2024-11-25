import Header from './Components/Header';
import GreetingCard from './Components/Greetingcard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex justify-center gap-6 mt-10 flex-wrap">
        <GreetingCard
          title="Happy Birthday!"
          message="Wishing you a fantastic day filled with joy!"
        />
        <GreetingCard
          title="Congratulations!"
          message="Great job on your achievement!"
        />
        <GreetingCard
          title="Thank You!"
          message="Thanks for your kindness and support!"
        />
      </main>
    </div>
  );
};

export default App;
