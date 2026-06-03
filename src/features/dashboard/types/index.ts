export interface StatCardProps {
  label: string;
  value: string | number;
}

export interface IVideo {
  id: string;
  title: string;
  views: string;
  publishedAt: string;
}

export interface IStats {
  label: string;
  value: string;
}

export interface IComment {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}
