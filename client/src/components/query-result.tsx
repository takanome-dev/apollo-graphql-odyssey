import React from "react";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";
import { ApolloError } from "@apollo/client";

interface Props {
  loading: boolean;
  error: ApolloError | undefined;
  data: any;
  children: React.ReactNode;
}

const QueryResult = (props: Props): JSX.Element => {
  const { loading, error, data, children } = props;

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </div>
    );
  }

  if (!data) {
    return <p>Nothing to show...</p>;
  }

  return <>{children}</>;
};

export default QueryResult;
