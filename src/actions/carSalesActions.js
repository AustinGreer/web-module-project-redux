export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (featId) => {
    return { type: ADD_FEATURE, payload: featId }
}

export const removeFeature = (featId) => {
    return { type: REMOVE_FEATURE, payload: featId }
}