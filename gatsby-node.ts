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
  const response = await fetch(
    `${printifyRoot}/shops/${shopId}/products.json`,
    {
      headers: {
        'Authorization': `Bearer ${process.env.PRINTIFY_API_TOKEN}`,
        "User-Agent": "LitDev Printify via Gatsby",
      }
    }
  );

  const json: ProductResponse = await response.json();
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

  data.forEach((productInStore) => {
    createNode({
      ...extractRelevantStoreData(productInStore),
      id: productInStore.id,
      slug: slugify(productInStore.title),
      internal: {
        type: 'PrintifyProduct',
        contentDigest: createContentDigest(productInStore),
      },
    });
  });
}

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
      component: path.resolve('./src/components/templates/product.tsx'),
      context: { id },
    });
  });
}
