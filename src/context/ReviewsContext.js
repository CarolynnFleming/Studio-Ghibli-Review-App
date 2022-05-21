import { createContext, useReducer } from 'react';

export const ReviewsContext = createContext();

function reducer(reviews, {type, payload }) {
    switch (type) {
        case 'create':
            return [payload, ...reviews];
        case 'reset':
            return payload;
        case 'update':
            return reviews.map((r) => (r.id === payload.id ? payload : r));
        case 'delete':
            return reviews.filter((r) => r.id !== payload.id);
        default:
            throw Error(`Unkown action: ${type}`);
    }
}

export const ReviewsProvider = ({ children }) => {
    const [reviews, dispatch] = useReducer(reducer);

    return (
        <ReviewsContext.Provider value={{ reviews, dispatch }}>
            {children}
        </ReviewsContext.Provider>
    );
};
