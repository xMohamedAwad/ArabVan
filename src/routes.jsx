import React, { lazy, Suspense } from "react";
import AuthRequired from "./components/AuthRequired";
import HostLayout from "./components/HostLayout";
import Layout from "./components/Layout";
import Checkout from "./pages/Checkout/Checkout";

const About = lazy(() => import("./pages/About/About"));
const Home = lazy(() => import("./pages/Home/Home"));
const HostVanDetail = lazy(() =>
  import("./pages/Host/HostVanDetail/HostVanDetail")
);
const HostVans = lazy(() => import("./pages/Host/HostVans/HostVans"));
const Dashboard = lazy(() => import("./pages/Host/Dashboard/Dashboard"));
const Income = lazy(() => import("./pages/Host/Income/Income"));
const Reviews = lazy(() => import("./pages/Host/Reviews/Reviews"));
const HostVanPhotos = lazy(() =>
  import("./pages/Host/HostVanPhotos/HostVanPhotos")
);
const HostVanPricing = lazy(() =>
  import("./pages/Host/HostVanPricing/HostVanPricing")
);
const HostVanInfo = lazy(() => import("./pages/Host/HostVanInfo/HostVanInfo"));
const Login = lazy(() => import("./pages/Login/Login"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const VanDetail = lazy(() => import("./pages/Vans/VanDetail/VanDetail"));
const Vans = lazy(() => import("./pages/Vans/Vans/Vans"));
const Signup = lazy(() => import("./pages/Signup/Signup"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={null}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "vans",
        element: (
          <Suspense fallback={null}>
            <Vans />
          </Suspense>
        ),
      },
      {
        path: "vans/:id",
        element: (
          <Suspense fallback={null}>
            <VanDetail />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={null}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={null}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={null}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/host",
        element: <AuthRequired />,
        children: [
          {
            path: "",
            element: <HostLayout />,
            children: [
              {
                path: "",
                element: (
                  <Suspense fallback={null}>
                    <Dashboard />
                  </Suspense>
                ),
              },
              {
                path: "income",
                element: (
                  <Suspense fallback={null}>
                    <Income />
                  </Suspense>
                ),
              },
              {
                path: "reviews",
                element: (
                  <Suspense fallback={null}>
                    <Reviews />
                  </Suspense>
                ),
              },
              {
                path: "vans",
                element: (
                  <Suspense fallback={null}>
                    <HostVans />
                  </Suspense>
                ),
              },
              {
                path: "vans/:id",
                element: (
                  <Suspense fallback={null}>
                    <HostVanDetail />
                  </Suspense>
                ),
                children: [
                  {
                    path: "",
                    element: (
                      <Suspense fallback={null}>
                        <HostVanInfo />
                      </Suspense>
                    ),
                  },
                  {
                    path: "pricing",
                    element: (
                      <Suspense fallback={null}>
                        <HostVanPricing />
                      </Suspense>
                    ),
                  },
                  {
                    path: "photos",
                    element: (
                      <Suspense fallback={null}>
                        <HostVanPhotos />
                      </Suspense>
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;