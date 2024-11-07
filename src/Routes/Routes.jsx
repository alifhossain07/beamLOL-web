import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ]
    },
  ],
  {
    future: {
      v7_startTransition: true,                // Enables automatic startTransition for smoother transitions
      v7_relativeSplatPath: true,               // Changes relative route resolution within splat routes
      v7_fetcherPersist: true,                  // Changes persistence behavior of fetchers
      v7_normalizeFormMethod: true,             // Normalizes `formMethod` fields to uppercase
      v7_partialHydration: true,                // Alters RouterProvider hydration behavior
      v7_skipActionErrorRevalidation: true,     // Changes revalidation behavior after 4xx/5xx `action` responses
    }
  }
);

export default routes;
