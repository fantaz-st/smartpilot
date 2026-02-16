export const LATEST_POSTS = `
  query Latest($first: Int = 6, $terms: [String!]!) {
    posts(
      first: $first
      where: {
        status: PUBLISH
        orderby: { field: DATE, order: DESC }
        taxQuery: {
          taxArray: [
            { taxonomy: PROJECTSITE, field: SLUG, terms: $terms, operator: IN }
          ]
        }
      }
    ) {
      nodes {
        slug
        title
        date
        excerpt
        projectSites {
          nodes { slug }
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
    $terms: [String!]!
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
        title
        date
        excerpt
        featuredImage { node { sourceUrl altText mediaDetails { width height } } }
        categories { nodes { name slug } }
        tags { nodes { name slug } }
        projectSites {
          nodes { slug }
        }
      }
    }
  }
`;

export const POST_BY_SLUG = `
  query PostBySlug($slug: ID!, $terms: [String!]!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      date
      modified
      featuredImage { node { sourceUrl altText } }
      blocks(attributes: true, dynamicContent: true)
      projectSites(where: { slug: $terms }) {
        nodes { slug }
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
  query AllPages($first: Int = 200, $terms: [String!]!) {
    pages(
      first: $first
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
        slug
        title
        uri
        databaseId
        parentDatabaseId
        projectSites {
          nodes { slug }
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
      title
      modified
      featuredImage { node { sourceUrl altText } }
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
      blocks(attributes: true, dynamicContent: true)
      projectSites(where: { slug: $terms }) {
        nodes { slug }
      } 
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
