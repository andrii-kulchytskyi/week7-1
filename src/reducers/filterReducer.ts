import {FilterValuesType} from "../App";


export const filterReducer = (state: FilterValuesType, action: ChangeFilterACType) => {
    switch (action.type) {
        case "CHANGE-FILTER": {
            return action.payload.value
        }
        default:
            return state
    }
}

type ChangeFilterACType = FilterValueACType;

export type FilterValueACType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value: FilterValuesType) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {
            value
        }
    } as const
}