import { ReactNode } from "react";
import RouteLayout, { Layouts } from "./RouteLayout";

interface Props {
  children: ReactNode;
  isPrivate?: boolean;
  layout?: Layouts;
}

const Route = ({ children, layout }: Props) => {
  return <RouteLayout layout={layout}>{children}</RouteLayout>;
};

export default Route;
