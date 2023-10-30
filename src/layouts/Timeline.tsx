import { Layout } from "antd";
import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

interface Props {
  children: ReactNode;
}

const TimelineLayout = ({ children }: Props) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout className="h-screen">{children}</Layout>
    </Layout>
  );
};

export default TimelineLayout;
