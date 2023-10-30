import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Home"));

export const HomePage = () => {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
};
