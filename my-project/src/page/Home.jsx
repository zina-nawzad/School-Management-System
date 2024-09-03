import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-x-10">
      <h1 className="font-bold text-primary-color text-2xl">Home Page</h1>
      <Link
        to={"/"}
        className="py-2 rounded px-4 bg-primary-color font-mono text-white"
      >
        go Dashboard
      </Link>
    </div>
  );
};

export default Home;
