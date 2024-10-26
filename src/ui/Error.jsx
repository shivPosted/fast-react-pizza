import { useRouteError } from "react-router-dom";

function Error() {
  const errorObj = useRouteError();
  console.dir(errorObj);
  return (
    <div>
      <h1>Something went wrong 😵😵</h1>
      <p>{errorObj.message || errorObj.data}</p>
    </div>
  );
}

export default Error;
