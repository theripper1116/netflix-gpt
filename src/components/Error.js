import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error {err.status}</h1>
      <h1>{err.statusText}</h1>
      <h2>{err.error.message}</h2>
    </div>
  );
};

export default Error;
