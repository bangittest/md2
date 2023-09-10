import {
    ACT_ADD_CART,
    ACT_DECREASE,
    ACT_DELETE,
    ACT_INCREASE,
} from "../constrains/actionTypes";

const initialState = JSON.parse(localStorage.getItem("carts")) || [];

const findIndexProduct = (id, array) => {
    const productIndex = array.findIndex((pro) => pro.product_id === id);
    return productIndex;
};

//ham luu giu lieu tren loacal
const saveDataLocal = (array) => {
    localStorage.setItem("carts", JSON.stringify(array));
};

export const listCart = (state = initialState, action) => {
    // console.log(listCart);
    // console.log(action);
    switch (action.type) {
        case ACT_ADD_CART:
            //vi tri can lay
            const indexProduct = findIndexProduct(action.payload.product_id, state);
            // kiem tra san pham neu da ton tai trong gio hang thi tang them 1
            if (indexProduct !== -1) {
                //clone lai  mang cu
                const newCarts = [...state];
                newCarts[indexProduct].quantyti += 1;
                // luu giu lieu len local
                saveDataLocal(newCarts);
                return newCarts;
            } else {
                // kiem tra san pham neu da ton tai trong gio hang thi tang them 1
                const newAddons = [...state, { ...action.payload, quantyti: 1 }];
                // luu len localStorage = localStorage
                saveDataLocal(newAddons);
                return newAddons;
            }

        //them trong gio hang
        case ACT_INCREASE:
            // clon lai mang cu
            const increaseCart = [...state];
            // lay ra vi tri can cap nhat
            const findIndexIncrease = findIndexProduct(action.payload, increaseCart);
            //cap nhat lai vi tri cua quantyti
            increaseCart[findIndexIncrease].quantyti += 1;
            saveDataLocal(increaseCart);
            return increaseCart;

        //giam so luong neu =0 thi xoa
        case ACT_DECREASE:
            //clon lai mang cu
            const decreaseCart = [...state];
            //lay ra vi tri
            const updateIndex = findIndexProduct(action.payload, decreaseCart);
            //cap nhar lai vi tri cua quantyti
            if (decreaseCart[updateIndex].quantyti > 1) {
                decreaseCart[updateIndex].quantyti -= 1;
                saveDataLocal(decreaseCart);
                return decreaseCart;
            } else {
                //loc ra nhung ban ghi co id khac
                const productFiter = decreaseCart.filter(
                    (product) => product.product_id !== action.payload
                );
                saveDataLocal(productFiter);
                return productFiter;
            }


        case ACT_DELETE:
            const decreaseCartDelete = [...state];
            //cap nhar lai vi tri cua quantyti

            //loc ra nhung ban ghi co id khac
            const productFiterDelete = decreaseCartDelete.filter(
                (product) => product.product_id !== action.payload
            );
            saveDataLocal(productFiterDelete);
            return productFiterDelete;

        default:
            break;
    }
    return state;
};
