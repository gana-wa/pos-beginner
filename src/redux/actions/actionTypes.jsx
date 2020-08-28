import { ActionType } from 'redux-promise-middleware';

export const MENU_FETCHED = 'menuFetched';
export const QUANTITY_INCREASED = 'quantityIncreased';
export const QUANTITY_DECREASED = 'quantityDecreased';
export const MENU_TO_CART = 'addToCart';
export const CLEAR_CART = 'emptyCart';

export const PENDING = `_${ActionType.Pending}`;
export const FULFILLED = `_${ActionType.Fulfilled}`;
export const REJECTED = `_${ActionType.Rejected}`;
