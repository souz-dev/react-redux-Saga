import { createStore } from "redux";
import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";
export const store = createStore(rootReducer);

export interface IState {
  cart: ICartState
}
