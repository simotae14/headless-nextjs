import "server-only";
import { contentGqlFetcher } from "./fetch";
import type { HeroQuery, LogoWallQuery, HeaderNavQuery, CustomerPostQuery } from "@/types";

export const getSlugsForPosts = async () => {
  const query = `#graphql
  query SlugsForPosts {
    customerPostCollection {
      items {
        slug
      }
    }
  }
  `;

  const data = await contentGqlFetcher<{
    customerPostCollection: {
      items: {
        slug: string
      }[]
    }
  }>({
    query
  });

  if (!data) {
    throw new Error('oops');
  }

  return data;
};

export const getContentForCustomerPost = async (slug: string) => {
  const query = `#graphql
  query CustomerPostCollection($where: CustomerPostFilter) {
    customerPostCollection(where: $where) {
      items {
        title
        slug
        customer {
          logo {
            url
            width
            height
            title
          }
          name
        }
        body {
          json
        }
      }
    }
  }
  `;

  const data = await contentGqlFetcher<CustomerPostQuery>({
    query,
    variables: {
      where: {
        slug,
      }
    }
  });

  if (!data) {
    throw new Error('oops');
  }

  return data;
};

export const getContentForHeaderNav = async () => {
  const query = `#graphql
  query NavigationCollection($where: NavigationFilter) {
    navigationCollection(where: $where) {
      items {
        name
        linksCollection {
          items {
            label
            link
          }
        }
      }
    }
  }
  `;

  const data = await contentGqlFetcher<HeaderNavQuery>({
    query,
    variables: {
      where: {
        name: 'Header'
      }
    }
  });

  if (!data) {
    throw new Error('oops');
  }

  return data;
}

export const getContentForLogoWall = async () => {
  const query = `#graphql
  query AssetCollection($where: AssetFilter) {
    assetCollection(where: $where) {
      items {
        url
        width
        title
        height
      }
    }
  }
  `;

  const data = await contentGqlFetcher<LogoWallQuery>({
    query,
    variables: {
      where: {
        title_contains: 'client'
      }
    }
  });

  if (!data) {
    throw new Error('oops');
  }

  return data;
}

export const getContentForHero = async () => {
  const query = `#graphql
  query HeroCollection {
    heroCollection {
      items {
        title
        subtitle
        preTitle
        callToActionsCollection {
          items {
            link
            label
          }
        }
      }
    }
  }
  `;
  const data = await contentGqlFetcher<HeroQuery>({query});

  if (!data) {
    throw new Error('oops');
  }

  return data;
}