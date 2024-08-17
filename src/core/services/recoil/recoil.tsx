import { atom, selector } from "recoil";
import { getDataLocalStorage } from "../../ultils/ultils";

/* ----------- DETAIL PRODUCT ----------- */
export const setDetailProduct = atom({
    key: 'setDetailProduct',
    default: undefined,
});

export const getDetailProduct = selector({
    key: 'getDetailProduct',
    get: ({ get }) => {
        const _data = get(setDetailProduct);

        if (_data === undefined || _data === null) return getDataLocalStorage('dataDetail');
        else return _data;
    },
});
/* ----------- DETAIL PRODUCT ----------- */

/* ----------- POLICY ----------- */
export const setTypePolicy = atom({
    key: 'setTypePolicy',
    default: '',
});

export const getTypePolicy = selector({
    key: 'getTypePolicy',
    get: ({ get }) => {
        const _data = get(setTypePolicy);

        if (_data === '') return getDataLocalStorage('typePolicy');
        else return _data;
    },
});
/* ----------- POLICY ----------- */

/* ----------- ORDER CART ----------- */
export const setOrderCart = atom<boolean>({
    key: 'setOrderCart',
    default: false,
});

export const getOrderCart = selector({
    key: 'getOrderCart',
    get: ({ get }) => get(setOrderCart),
});
/* ----------- ORDER CART ----------- */
