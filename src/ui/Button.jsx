import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "bg-yellow-400 rounded-full py-2 px-4 uppercase font-bold text-sm hover:bg-yellow-300 transition-colors duration-300 focus:ring  focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
export default Button;
