import Createuser from "../features/user/Createuser";

function Home() {
  return (
    <div className=" px-6 text-center m-8 sm:m-12 sm:overflow-auto" >
      <h1 className="  text-stone-700 mb-4 text-xl font-semibold md:text-3xl">
        The Best Pizza.
        <br />
        <span className="text-yellow-500">
        Straight Out of The Oven Straight to You.
        </span>
      </h1>
      <Createuser />
    </div>
  );
}
export default Home;
