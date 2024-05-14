import type { ResImage } from "./image";

export type BoardPerson = {
  id: number;
  name: string;
  email: string;
  function: string;
  tel: string;
  priority: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: ResImage;
};
