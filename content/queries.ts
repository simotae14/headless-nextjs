import { contentGqlFetcher } from "./fetch";
import type { HeroQuery } from "@/types";

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