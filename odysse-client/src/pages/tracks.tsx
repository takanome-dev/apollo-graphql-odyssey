import { gql, useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout";
import QueryResult from "../components/query-result";
import TrackCard from "../containers/track-card";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const TRACKS = gql`
    query GetTracks {
      tracksForHome {
        id
        title
        thumbnail
        length
        modulesCount
        author {
          id
          name
          photo
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(TRACKS);
  console.log({ data });

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracksForHome?.map(track => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
