import { useSelector } from "react-redux";

function Username() {
  const name = useSelector((state) => state.user.userName);
  return (
    <div className="hidden  text-xlfont-semibold  md:block md:font-bold ">
      {name}
    </div>
  );
}
export default Username;
