import { gql, useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout";
import ModuleDetail from "../components/module-detail";
import QueryResult from "../components/query-result";
import { RouteComponentProps } from "@reach/router";
import { Track } from "../types";

interface Props extends RouteComponentProps {
  trackId?: string;
  moduleId?: string;
}

interface Response {
  track: Track;
  module: Track["modules"][0];
}

const GET_TRACK_MODULE = gql`
  query GetModule($moduleId: ID!, $trackId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }

    module(id: $moduleId) {
      id
      videoUrl
      title
      content
    }
  }
`;

const Module = ({ trackId, moduleId }: Props) => {
  const { data, loading, error } = useQuery<Response>(GET_TRACK_MODULE, {
    variables: { trackId, moduleId },
  });

  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
