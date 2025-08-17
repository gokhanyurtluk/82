export const initialState = {
    favorites: [],
    displayFavorites: true,
}
export const favoritesReducer = (state = initialState, action) => {
    switch (action, type) {
        case "ADD_FAVORITE":
            return {...state, favorites: [...state.favorites, action.payload]}
        case "REMOVE_FAVORITE":
            return {...state, favorites: state.favorites.filter(item => action.payload !== item.id)}
        case "TOGGLE_FAVORITES":
            return {...state, displayFavorites: !state.displayFavorites}
            default:
                return state;
    }
}