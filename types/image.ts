export type ResImage = {
  id: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: Format;
    medium: Format;
    small: Format;
  };
};
type Format = {
  url: string;
  ext: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};
