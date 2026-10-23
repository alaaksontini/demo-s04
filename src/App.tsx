import { Route, Routes } from "react-router";
import Layout from "./shared/Layout";
import Login from "./features/Login/LoginPage";
import ProtectedRoute from "./shared/ProtectedRoute";
import NotFound from "./shared/NotFound";
import { createContext, lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "./shared/ErrorBoundary";

const Home = lazy(() => import("./features/Home/HomePage"));
const About = lazy(() => import("./features/About/AboutPage"));
const Todos = lazy(() => import("./features/Todos/TodosPage"));
const Products = lazy(
  () => import("./features/Products/components/ProductsPage"),
);
const ProductDetail = lazy(
  () => import("./features/Products/components/ProductDetail"),
);
const CreateProduct = lazy(
  () => import("./features/Products/components/CreateProduct"),
);
const EditProduct = lazy(
  () => import("./features/Products/components/EditProduct"),
);
const MSForms = lazy(() => import("./features/MultiStepForms/MSForms"));

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {
    console.log(theme);
  },
});

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Suspense fallback={<p className="p-4">Loading...</p>}>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <ErrorBoundary>
                    <Layout />
                  </ErrorBoundary>
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="forms" element={<MSForms />} />
              <Route path="products" element={<Products />} />
              <Route path="products/create" element={<CreateProduct />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="products/:id/edit" element={<EditProduct />} />

              <Route path="todos" element={<Todos />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
