// Set to false to restore the portfolio across all existing routes.
export const COMING_SOON = true;

// Pages that stay open while the rest of the site shows "Site in progress".
// The MAX case study is the link shared with employers; About is the one page it links to.
export const OPEN_ROUTES = ["/work/max", "/about"];

export const isOpenRoute = (pathname: string) =>
  OPEN_ROUTES.includes(pathname.replace(/\/+$/, "") || "/");
