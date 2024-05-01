// format frontmatter for meta tags
import * as React from "react";

import { Frontmatter } from "./posts";

export function getMetaTags(frontmatter: Frontmatter) {
  return [
    { title: frontmatter.title },
    { name: "description", content: frontmatter.description },
    {
      content: frontmatter.title,
      property: "og:title",
    },
    {
      content: frontmatter.description,
      name: "og:description",
    },
  ];
}

export function useUpdateQueryStringValueWithoutNavigation(
  queryKey: string,
  queryValue: string
) {
  React.useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    const oldQuery = currentSearchParams.get(queryKey) ?? "";
    if (queryValue === oldQuery) return;

    if (queryValue) {
      currentSearchParams.set(queryKey, queryValue);
    } else {
      currentSearchParams.delete(queryKey);
    }
    const newUrl = [window.location.pathname, currentSearchParams.toString()]
      .filter(Boolean)
      .join("?");
    // alright, let's talk about this...
    // Normally with remix, you'd update the params via useSearchParams from react-router-dom
    // and updating the search params will trigger the search to update for you.
    // However, it also triggers a navigation to the new url, which will trigger
    // the loader to run which we do not want because all our data is already
    // on the client and we're just doing client-side filtering of data we
    // already have. So we manually call `window.history.pushState` to avoid
    // the router from triggering the loader.
    window.history.replaceState(null, "", newUrl);
  }, [queryKey, queryValue]);
}
