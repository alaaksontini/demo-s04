import { NavLink, Outlet } from "react-router";
import useCartStore from "../features/Cart/stores/CartStore";
import WsStatusIndicator from "./components/wsStatusIndicator";

function Layout() {
  const cartItems = useCartStore((state) => state.items);

  return (
    <div>
      <nav className="flex gap-2 text-xl text-blue-600">
        <NavLink
          className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          to="/forms"
        >
          Forms
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          to="/products"
        >
          Produits
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          to="/todos"
        >
          Todos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          to="/login"
        >
          Login
        </NavLink>

        <span className="text-emerald-700">Panier: {cartItems.length}</span>

        <WsStatusIndicator />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
