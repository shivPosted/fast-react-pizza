import { useRouteError } from "react-router-dom";

function Error() {
  //error hook will get access to errors if occured in the component where errorElement is assoiciated
  const errorObj = useRouteError();
  console.dir(errorObj);
  return (
    <div>
      <h1>Something went wrong 😵😵</h1>
      <p>{errorObj.message || errorObj.data}</p>{" "}
      {/*NOTE: using err.data in case err.message doesn't exist*/}
    </div>
  );
}

export default Error;
