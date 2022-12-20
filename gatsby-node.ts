import slugify from '@sindresorhus/slugify';
import type { GatsbyNode } from 'gatsby';
import fetch from 'node-fetch';
import path from "path";
import { Product, ProductData, ProductResponse } from './src/types/printify';

const printifyRoot = 'https://api.printify.com/v1/';
const shopId = process.env.PRINTIFY_SHOP_ID

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions: { createNode },
  createContentDigest
}) => {
  let response;
  try {
    response = await fetch(
      `${printifyRoot}/shops/${shopId}/products.json`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.PRINTIFY_API_TOKEN}`,
          "User-Agent": "LitDev Printify via Gatsby",
        }
      }
    );
  } catch {
    if (process.env.DEV) {
      response = await sampleResponse()
    }
  }

  const json: ProductResponse = await response?.json();
  const {
    data,
    // current_page,
    // next_page_url,
    // per_page,
    // from,
    // to,
    // total,
  } = json;
  
  // TODO: while next_page_url, fetch current_page + 1
  if (data.length === 1) {
    data[0].description += ' featured'
  }

  data.forEach((productInStore) => {
    createNode({
      ...extractRelevantStoreData(productInStore),
      id: productInStore.id,
      slug: `products/${slugify(productInStore.title)}`,
      internal: {
        type: 'PrintifyProduct',
        contentDigest: createContentDigest(productInStore),
      },
    });
  });
}

const isFeatured = (description: ProductData["description"]) => description?.includes('featured')

const extractRelevantStoreData = ({
  id, 
  title, 
  description, 
  images, 
  tags, 
  shop_id
}: ProductData): Product => ({
  id,
  title,
  description,
  images,
  tags,
  shop_id,
  featured: isFeatured(description),
})

type AllProductsQueryResult = {
  allPrintifyProduct: {
    nodes: {id: string, slug: string}[];
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ 
  actions: { createPage },
  graphql
}) => {
  const result = await graphql<AllProductsQueryResult>(`
    query {
      allPrintifyProduct {
        nodes {
          id
          slug
        }
      }
    }
  `);

  result?.data?.allPrintifyProduct?.nodes?.forEach(({ id, slug }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve('./src/components/templates/Product.tsx'),
      context: { id },
    });
  });
}


const sampleResponse = async () => {
  return {
    json: async (): Promise<ProductResponse> => ({
      data: [{
        blueprint_id: 12345,
        description: "For those devs who know they want to change the world, but haven't found their place yet.",
        id: "12345",
        images: [{
          position: "center",
          src: "/images/icon.png",
          variant_ids: [121],
        }],
        options: [{
          name: "12x12",
          type: "depth",
          values: [{
            id: 987,
            title: "12x12"
          }],
        }],
        shop_id: 54123,
        tags: ["home", "art", "vinyl"],
        title: "12x12",
        visible: true
      }],
      current_page: 1,
      first_page_url: "/1",
      from: 1,
      last_page_url: "/1",
      next_page_url: null,
      path: "/1",
      per_page: 100,
      prev_page_url: null,
      to: 1,
      total: 1
    }) 
  }
}