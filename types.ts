export type HeaderNavQuery = {
  navigationCollection: {
    items: {
      name: string,
      linksCollection: {
        items: {
          label: string,
          link: string
        }[]
      }
    }[]
  }
}

export type LogoWallQuery = {
  assetCollection: {
    items: {
      url: string,
      width: number,
      title: string,
      height: number
    }[]
  }
}

export type HeroQuery = {
  heroCollection: {
    items: {
      title: string,
      subtitle: string,
      preTitle: string,
      callToActionsCollection: {
        items: {
          link: string,
          label: string
        }[]
      }
    }[]
  }
}