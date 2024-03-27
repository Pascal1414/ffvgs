import type { ResImage } from "~/types/image";

export const sanitizeApiResponse = (response: any) => {
  if (!response || !response.data) {
    return undefined;
  }
  if (Array.isArray(response.data)) {
    const sanitized = response.data.reduce((acc: any[], curr: any) => {
      const item = {
        id: curr.id,
        ...curr.attributes,
        Image: sanitizeApiResponse(curr.attributes.image),
        Images: Object.values({
          ...(sanitizeApiResponse(curr.attributes.Images) as ResImage[]),
        }),
      };
      acc.push(item);
      return acc;
    }, []);
    return sanitized;
  }
  const sanitized = {
    id: response.data.id,
    ...response.data.attributes,
  };
  return sanitized;
};
