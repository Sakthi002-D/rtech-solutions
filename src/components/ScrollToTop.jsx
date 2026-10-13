import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets the page scroll position to the top on every route change.
 *
 * - Triggered on every navigation (link click, programmatic nav, back/forward).
 * - Also covers direct URL navigation because `useLocation` updates whenever
 *   the router state changes, including fresh loads.
 * - A hard browser refresh starts at the top automatically, so no extra
 *   handling is needed for requirement 2; this component only guarantees
 *   that ordinary and programmatic route transitions start at the top.
 */
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Re-run on any route change. `location.pathname` is the stable key;
    // `location.search` and `location.hash` are deliberately excluded so
    // query/hash-only changes don't trigger unnecessary scrolls.
  }, [location.pathname]);

  return null;
}

export default ScrollToTop;
