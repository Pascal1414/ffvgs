export type ResImage = {
  id: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail?: Format;
    medium?: Format;
    small?: Format;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url?: string;
  previewUrl: null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  created_at: string;
  updated_at: string;
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
