import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Ooops! Something went wrong!!</h2>
      <h3>{error.statusText || error.message}</h3>
    </div>
  );
};

export default Error;
