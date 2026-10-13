const WORDPRESS_GRAPHQL_URL =
  "https://dashboard.mahatienterprises.com/graphql";

export async function fetchWordPress(
  query: string,
  variables: Record<string, any> = {}
) {
  const response = await fetch(WORDPRESS_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `WordPress GraphQL request failed: ${response.status}`
    );
  }

  const result = await response.json();

  if (result.errors) {
    console.error("GraphQL Errors:", result.errors);
    throw new Error(
      result.errors[0]?.message || "GraphQL request failed"
    );
  }

  return result.data;
}

export async function fetchAllWordPressPosts<T = any>(
  fields: string = `
    id
    title
    slug
    date
    excerpt
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  `
): Promise<T[]> {
  let allNodes: T[] = [];
  let hasNextPage = true;
  let after: string | null = null;

  while (hasNextPage) {
    const query = `
      query GetAllPosts($first: Int!, $after: String) {
        posts(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            ${fields}
          }
        }
      }
    `;

    const data = await fetchWordPress(query, {
      first: 100,
      after,
    });

    const posts = data.posts;
    allNodes = allNodes.concat(posts.nodes);
    hasNextPage = posts.pageInfo.hasNextPage;
    after = posts.pageInfo.endCursor;
  }

  return allNodes;
}