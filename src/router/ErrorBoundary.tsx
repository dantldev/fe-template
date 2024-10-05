import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>
        <p className="text-lg">
          Please try again later.
        </p>
      </div>
    </div>
  );
};