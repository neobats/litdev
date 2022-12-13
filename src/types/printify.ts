export type ProductResponse = {
  data: ProductData[];
  current_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  per_page: number;
  path: string;
  from: number;
  to: number;
  total: number;
}
export type Product = {
  id: string;
  title: string;
  description: string;
  images: ProductImage[];
  shop_id: number;
  tags: string[];
}

export type ProductData = Product & {
  options: ProductOptions[];
  visible: boolean;
  blueprint_id: number;
}

export type ProductImage = {
  src: string;
  variant_ids: [number];
  position: "front" | "other" | string;
}

export type ProductOptions = {
  name: string;
  type: "depth" | "size";
  values: {
    id: number;
    title: string;
  }[]
}

export type ProductImageWithMetadata = {
  is_default: boolean;
  is_selected_for_publishing: boolean;
} & ProductImage