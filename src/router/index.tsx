import { ReactElement, Suspense } from "react";
import { Navigate } from "react-router";

import { assessPage } from "../utils";

import MioCmPageLoading from "../components/loading/page-loading";
import MioCmNotFound from "../components/404";
// mobile
// web
import MioWebHome from "../page-web/pages/home";
import MioWebTest from "../page-web/pages/test";

//- 懒加载优化
const lazyLoad = (children: ReactElement) => {
  return <Suspense fallback={<MioCmPageLoading />}>{children}</Suspense>;
};

const assessFlag = assessPage.assessPage();
const notFountTSX = lazyLoad(<MioCmNotFound />);

export const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to={'/home'} />
      },
      {
        path: '*',
        element: notFountTSX
      },
      {
        path: '/home',
        element: assessFlag?lazyLoad(<MioWebHome />):notFountTSX
      }
    ]
  },
  {
    path: '/test',
    element: assessFlag?lazyLoad(<MioWebTest />):notFountTSX
  }
]