import { gql, useQuery } from "@apollo/client";
import Layout from "../components/layout";
import QueryResult from "../components/query-result";
import TrackCard from "../containers/track-card";
import { Track } from "../types";
import { RouteComponentProps } from "@reach/router";

interface Response {
  tracksForHome: Track[];
}

const Tracks = (props: RouteComponentProps) => {
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

  const { loading, error, data } = useQuery<Response>(TRACKS);
  console.log({ data });

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracksForHome?.map(track => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
