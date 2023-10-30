import { ReactNode } from "react";
import TimelineLayout from "../../layouts/Timeline";
import HomeLayout from "../../layouts/Home";

export type Layouts = "default" | "timeline";

interface Props {
  children: ReactNode;
  layout?: Layouts;
}

const RouteLayout = ({ children, layout = "default" }: Props) => {
  switch (layout) {
    case "timeline":
      return <TimelineLayout>{children}</TimelineLayout>;
    default:
      return <HomeLayout>{children}</HomeLayout>;
  }
};

export default RouteLayout;
