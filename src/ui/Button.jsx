import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, clickHandler = () => {} }) {
  const base =
    "bg-yellow-400 rounded-full  uppercase font-bold  hover:bg-yellow-300 transition-colors duration-300 focus:ring  focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed text-xs  md:text-base sm:text-xs";

  const style = {
    primary: base + " py-3 px-8",
    secondary: base + " py-1.5 px-4",
    tertiary:
      "py-2 px-4 bg-yellow-transparent rounded-full  uppercase font-bold  hover:bg-stone-300 hover:text-stone-700 transition-colors duration-300 focus:ring  focus:ring-offset-2 focus:ring-stone-300 focus:bg-stone-300 focus:outline-none disabled:cursor-not-allowed text-xs  md:text-base sm:text-xs",
    round: base + " w-8 h-8",
  };

  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={style[type]} onClick={clickHandler}>
      {children}
    </button>
  );
}
export default Button;
