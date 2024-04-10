import type { ResImage } from "./image";

export type Vip = {
  id: number;
  name: string;
  function: string;
  image: ResImage;
  priority: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
