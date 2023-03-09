interface Site {
  name: string;
  url: string;
  repoUrl: string;
  description: string;
  image: string;
  stack: string[];
}

interface Sites {
  [key: number]: Site;
}

export type {
    Site,
    Sites
};