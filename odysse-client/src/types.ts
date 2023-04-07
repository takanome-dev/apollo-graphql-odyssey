export interface Track {
  __typename: string;
  id: string;
  title: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
  author: Author;
}

export interface Author {
  __typename: string;
  id: string;
  name: string;
  photo: string;
}
