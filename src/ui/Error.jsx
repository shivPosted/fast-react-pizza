import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  //error hook will get access to errors if occured in the component where errorElement is assoiciated
  const errorObj = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😵😵</h1>
      <p>{errorObj.message || errorObj.data}</p>{" "}
      {/*NOTE: using err.data in case err.message doesn't exist*/}
      <LinkButton to={-1}>&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
