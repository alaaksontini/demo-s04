import { createContext, useReducer } from "react";

interface CartState {
  items: { id: string; name: string; price: number; quantity: number }[];
}

interface CartAction {
  type: string;
  payload: any;
}

const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export const CartContext = createContext({
  state: {} as CartState,
  dispatch: (_action: CartAction) => {},
});
function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(CartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
