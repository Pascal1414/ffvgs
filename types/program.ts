export type Program = {
  id: number;
  documentId: string;
  name: string;
  description?: string | null;
  forAll: boolean;
  forJunior: boolean;
  dates: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
