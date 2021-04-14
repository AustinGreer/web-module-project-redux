export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = (featId) => {
    return { type: ADD_FEATURE, payload: featId }
}