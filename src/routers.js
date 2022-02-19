import { Redirect } from "react-router-dom";
import { withSuspense } from "./hoc/withSuspense";

export const routers = {
    redirectToStart: {
        path: "*",
        render: () => <Redirect to="/" />,
    },
};

export const routersKeys = Object.keys(routers);
