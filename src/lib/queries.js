export const LATEST_POSTS = `
  query Latest($first: Int = 6, $terms: [String!]!, $lang: LanguageCodeFilterEnum!) {
    posts(
      first: $first
      where: {
        status: PUBLISH
        orderby: { field: DATE, order: DESC }
        language: $lang
        taxQuery: {
          taxArray: [
            { taxonomy: PROJECTSITE, field: SLUG, terms: $terms, operator: IN }
          ]
        }
      }
    ) {
      nodes {
        id
        slug
        uri
        title
        date
        excerpt
        language { slug }
        translations {
          slug
          uri
          language { slug }
        }
      }
    }
  }
`;

export const ALL_NEWS = `
  query AllNews(
    $first: Int = 12,
    $after: String,
    $search: String,
    $category: String,
    $tag: String,
    $year: Int,
    $month: Int,
    $order: OrderEnum = DESC,
    $terms: [String!]!,
    $lang: LanguageCodeFilterEnum!
  ) {
    posts(
      first: $first
      after: $after
      where: {
        status: PUBLISH
        orderby: { field: DATE, order: $order }
        search: $search
        categoryName: $category
        tag: $tag
        dateQuery: { year: $year, month: $month }
        language: $lang
        taxQuery: {
          taxArray: [
            { taxonomy: PROJECTSITE, field: SLUG, terms: $terms, operator: IN }
          ]
        }
      }
    ) {
      pageInfo { hasNextPage endCursor }
      nodes {
        id
        slug
        uri
        title
        date
        excerpt
      }
    }
  }
`;

export const POST_BY_SLUG = `
  query PostBySlug($slug: String!, $terms: [String!]!, $lang: LanguageCodeFilterEnum!) {
    posts(
      first: 1
      where: {
        status: PUBLISH
        language: $lang
        name: $slug
        taxQuery: {
          taxArray: [
            { taxonomy: PROJECTSITE, field: SLUG, terms: $terms, operator: IN }
          ]
        }
      }
    ) {
      nodes {
        id
        slug
        uri
        title
        date
        modified
        featuredImage { node { sourceUrl altText } }
        blocks(attributes: true, dynamicContent: true)
        language { slug }
        translations {
          slug
          uri
          language { slug }
        }
      }
    }
  }
`;

/* export const POST_BY_SLUG = `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      date
      modified
      featuredImage { node { sourceUrl altText } }
      blocks(attributes: true, dynamicContent: true)
    }
  }
`; */

export const ALL_PAGES = `
  query AllPages($first: Int = 200, $terms: [String!]!, $lang: LanguageCodeFilterEnum!) {
    pages(
      first: $first
      where: {
        status: PUBLISH
        language: $lang
        taxQuery: {
          taxArray: [
            { taxonomy: PROJECTSITE, field: SLUG, terms: $terms, operator: IN }
          ]
        }
      }
    ) {
      nodes {
        id
        slug
        uri
        title
        databaseId
        parentDatabaseId
        language { slug }
        translations {
          uri
          slug
          language { slug }
        }
      }
    }
  }
`;

export const ALL_PAGES_ALT = `
  query AllPagesAlt($terms: [String!]!) {
    pages(
      where: {
        status: PUBLISH
        taxQuery: {
          taxArray: [
            { taxonomy: PROJECTSITE, field: SLUG, terms: $terms, operator: IN }
          ]
        }
      }
    ) {
      nodes {
        databaseId
        parentDatabaseId
        slug
        title
        uri
        projectSites {
          nodes { slug }
        }
      }
    }
  }
`;

export const PAGE_BY_PATH = `
  query PageByPath($path: ID!, $terms: [String!]!) {
    page(id: $path, idType: URI) {
      id
      slug
      uri
      title
      modified
      featuredImage { node { sourceUrl altText } }
      blocks(attributes: true, dynamicContent: true)

      language { slug }
      translations {
        uri
        slug
        language { slug }
      }

      ancestors {
        nodes {
          ... on Page {
            id
            uri
            title
          }
        }
      }

      children {
        nodes {
          ... on Page {
            id
            uri
            title
          }
        }
      }

      projectSites(where: { slug: $terms }) { nodes { slug } }
    }
  }
`;
// new, paginated menu query
export const MENU_PAGE = `
  query MenuPage($name: ID!, $after: String) {
    menu(id: $name, idType: NAME) {
      menuItems(first: 100, after: $after) {
        nodes { databaseId parentDatabaseId label uri }
        pageInfo { hasNextPage endCursor }
      }
    }
  }
`;
