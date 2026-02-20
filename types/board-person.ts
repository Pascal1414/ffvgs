import type { ResImage } from './image';

export type BoardPerson = {
  id: number;
  documentId: string;
  name: string;
  function: string;
  priority: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: ResImage;
};
