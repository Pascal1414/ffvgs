import type { ResImage } from './image';

export type HomeArticle = {
  id: number;
  text: string;
  priority: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: ResImage[];
};
