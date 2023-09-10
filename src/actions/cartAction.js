import { ACT_ADD_CART, ACT_DECREASE, ACT_DELETE, ACT_INCREASE } from "../constrains/actionTypes";

export const act_add = (product) => {
    return {
        type: ACT_ADD_CART,
        payload: product
    }
}

export const act_decrease = (id) => {
    return {
        type: ACT_DECREASE,
        payload: id
    }
}

export const act_incease = (id) => {
    return {
        type: ACT_INCREASE,
        payload: id
    }
}

export const act_delete = (id) => {
    return {
        type: ACT_DELETE,
        payload: id
    }
}
