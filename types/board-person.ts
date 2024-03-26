import type { ResImage } from "./image";

export type BoardPerson = {
  id: number;
  Name: string;
  Email: string;
  Function: string;
  Tel: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Image: ResImage;
};
