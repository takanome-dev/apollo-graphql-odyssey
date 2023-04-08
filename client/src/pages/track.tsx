import { gql, useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout";
import QueryResult from "../components/query-result";
import TrackDetail from "../components/track-detail";
import { RouteComponentProps } from "@reach/router";
import { Track as TrackType } from "../types";

interface Props extends RouteComponentProps {
  trackId?: string;
}

interface Response {
  track: TrackType;
}

export const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = (props: Props) => {
  const { data, loading, error } = useQuery<Response>(GET_TRACK, {
    variables: { trackId: props.trackId },
  });

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
