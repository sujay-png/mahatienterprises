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