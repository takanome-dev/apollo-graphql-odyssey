import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Layout, ModuleDetail, QueryResult } from '../components';

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

const Module = ({ trackId, moduleId }) => {
  console.log({ trackId, moduleId });

  const { data, loading, error } = useQuery(GET_TRACK_MODULE, {
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
