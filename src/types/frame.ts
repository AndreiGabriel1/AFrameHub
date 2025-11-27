// AN: semantic ISO date alias
export type ISODate = string;

// Intent: shape for one A-Frame article / house card
export interface Frame {
  id: string;
  title: string;
  info: string;
  slug: string;
  image?: string; // optional - from /gallery
  createdAt?: ISODate;
}

// Unified API response
export interface ApiResponse<T> {
  ok: boolean;
  data: T;
}
