import type from './type';

const setVisibilityFilter = filter => ({
    type: type.SET_VISIBILITY_FILTER,
    filter
})

export default {
    setVisibilityFilter
}