import { createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export type Blog = {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  tags?: Tag[];
  publishedAt: string;
  updatedAt: string;
  revisedAt: string;
};

export type Tag = {
  id: string;
  name: string;
  color?: string;
};

export type BlogResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export const getBlogList = async (queries?: {
  limit?: number;
  offset?: number;
  filters?: string;
}): Promise<BlogResponse> => {
  const response = await client.get({
    endpoint: 'blog-posts',
    queries,
  });
  return response;
};

export const getBlogDetail = async (contentId: string): Promise<Blog> => {
  const response = await client.get({
    endpoint: 'blog-posts',
    contentId,
  });
  return response;
};