import u from "updeep"

export const initialState = InitialState()

export default (state = initialState, event = {}) => {
    if(event.type === "SEARCH_RESULTS_RECEIVED") {
        return handleSearchResultsReceived(state, event)
    }

    if(event.type === "TYPE_DESELECTED") {
        const index = state
            .selected
            .indexOf(event.payload);
        const selected = state
            .selected
            .slice(0, index)
            .concat(
                state.selected.slice(index+1))
        return u(
            {
                selected
            },
            state
        )
    }
    if(event.type === "TYPE_SELECTED") {
        const selected = state.selected.concat(event.payload)
        return u(
            {
                selected
            },
            state
        )
    }
    return state
}

export function InitialState() {
    return {
        selected: [ ],
        data: [ ]
    }
}

export function handleSearchResultsReceived(state, event) {
    const set = new Set()
    event
        .payload
        .data
        .forEach(item => {
            if(item.type)
                set.add(item.type)
        })
    const result = 
        {
            selected: [],
            data: Array.from(set)
        }

    return result
}