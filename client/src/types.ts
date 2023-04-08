export interface Track {
  __typename: string;
  id: string;
  title: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
  author: Author;
  description: string;
  numberOfViews: number;
  modules: Module[];
}

export interface Author {
  __typename: string;
  id: string;
  name: string;
  photo: string;
}

export interface Module {
  __typename: string;
  id: string;
  title: string;
  length: number;
  content: string;
  videoUrl: string;
}
