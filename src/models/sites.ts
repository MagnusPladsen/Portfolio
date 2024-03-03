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

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  homepage: string;
  stargazers_count: number;
  language: string;
}

export type { Site, Sites, Repo };
