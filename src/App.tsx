import Header from "./components/Header";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div className="bg-mobile sm:bg-desktop bg-no-repeat bg-cover pt-40 h-[30vh]">
      <div className="grid place-items-center gap-10 max-w-2xl px-10 mx-auto -mt-24">
        <Header />
        <CreateTask />
      </div>
    </div>
  );
}

export default App;
