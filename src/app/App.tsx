import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Post from "../pages/Post/Post";
import Posts from "../pages/Posts/Posts";
import Search from "../pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/:postId",
    element: <Post />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
