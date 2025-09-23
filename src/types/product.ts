export type Product = {
  id: string;
  name: string;
  description: string;
  brandName: string;
  categoryName: string;
  specs: {
    CPU?: string;
    Display?: string;
    [key: string]: string | undefined;
  };
  price: number;
  thumbnailUrl?: string | null;
};
