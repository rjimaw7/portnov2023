import { lazy, Suspense } from "react";

const Timeline = lazy(() => import("./Timeline"));

export const TimelinePage = () => {
  return (
    <Suspense>
      <Timeline />
    </Suspense>
  );
};
