import { ReactElement, Suspense } from "react";
import { Navigate } from "react-router";

import { assessPageMethods } from "../utils";

import MioCmPageLoading from "../components/loading/page-loading";
import MioCmNotFound from "../components/404";
// mobile
// web
import MioWebTest from "../page-web/pages/test";
import MioWebDiscover from "../page-web/pages/discover";
import MioWebDiscoverHome from "../page-web/pages/discover/pages/home";
import MioWebPleaseLogin from "../page-web/pages/pleaselogin";

//- 懒加载优化
const lazyLoad = (children: ReactElement) => {
  return <Suspense fallback={<MioCmPageLoading />}>{children}</Suspense>;
};

const assessFlag = assessPageMethods.assessPage();
const notFountTSX = lazyLoad(<MioCmNotFound />);

export const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to={'/discover/home'} />
      },
      {
        path: '*',
        element: notFountTSX
      },
    ]
  },
  {
    path: '/discover',
    element: <MioWebDiscover />,
    children: [
      {
        index: true,
        element: <Navigate to={'/discover/home'} />
      },
      {
        path: '*',
        element: notFountTSX
      },
      {
        path: '/discover/home',
        element: assessFlag?lazyLoad(<MioWebDiscoverHome />):notFountTSX
      }
    ]
  },
  {
    path: '/pleaselogin',
    element: assessFlag?lazyLoad(<MioWebPleaseLogin />):notFountTSX
  },
  {
    path: '/test',
    element: assessFlag?lazyLoad(<MioWebTest />):notFountTSX
  }
]