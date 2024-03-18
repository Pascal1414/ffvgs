import type { ResImage } from "./image";

export type HomeArticle = {
  id: number;
  Text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Images: ResImage[];
};
