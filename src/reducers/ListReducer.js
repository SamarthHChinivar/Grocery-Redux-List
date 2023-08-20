export const ListReducer = (state = {List:[]}, action) => {
    switch(action.type){
        case 'ADD_ITEM':
          return action.payload;

        case 'REMOVE_ITEM':
          return action.payload;
    }
};