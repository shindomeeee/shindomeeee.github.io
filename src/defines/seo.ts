export interface SeoDefines {
  lang: string;
  description: string;
  title: string;
  author: string;
  keywords: Array<string>;
  meta: Array<{
    name: string;
    content: any;
    property?: any;
  }>;
}

export const seoDefines: SeoDefines = {
  lang: "ja",
  description: "テックな集まり",
  title: "shin・DO・meeeee",
  author: "@UltraBirdTech",
  keywords: [],
  meta: []
};
