import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "text- font-bold text-blue-500 hover:underline hover:text-blue-600";
  if (to === -1)
    return (
      <button
        className={className}
        onClick={() => {
          navigate(to);
        }}
      >
        {children}
      </button>
    );
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
export default LinkButton;
