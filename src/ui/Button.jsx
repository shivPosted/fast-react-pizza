import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "bg-yellow-400 rounded-full  uppercase font-bold  hover:bg-yellow-300 transition-colors duration-300 focus:ring  focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed";

  const style = {
    primary: base + " py-3 px-8",
    secondary: base + " py-2 px-4 text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}
export default Button;
