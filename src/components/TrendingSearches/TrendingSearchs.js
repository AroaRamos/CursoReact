import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const {isNearScreen, fromRef} = useNearScreen({distance : '500px'});
 
  return <div ref={fromRef}>
        <Suspense fallback={null}>
        {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>;
    
}
