export const AddItemAction = (item) => (dispatch, getState) => {
    const {List : {items}} = getState();

    const hasItem = items.find((l) => l.item === item);

    if(!hasItem && items.trim() !== ''){
        dispatch({
            type: 'ADD_ITEM',
            payload: [{id:item, item}, ...items]
        });
    }
};

export const RemoveItemAction = (item) => (dispatch, getState) => {
    const {List: {items}} = getState();

    dispatch({
        type: 'REMOVE_ITEM',
        payload: items.filter((l) => l.id !== item.id)
    });
}