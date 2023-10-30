import { useRoutes } from "react-router-dom";
import { router } from "./router";

const RouterView = () => {
  const routes = useRoutes(router);

  return <div>{routes}</div>;
};

export default RouterView;
