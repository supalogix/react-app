import u from "updeep"

export const initialState = InitialState()

export default (state = initialState, event = {}) => {
    if(event.type === "LANGUAGE_DESELECTED") {
        const index = state.selected.indexOf(event.payload);
        const selected = state.selected.slice(0, index).concat(
            state.selected.slice(index+1)
        )
        return u(
            {
                selected
            },
            state
        )
    }
    if(event.type === "LANGUAGE_SELECTED") {
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
        selected: [
        ],
        data: [
            {
                id: "en",
                name: "en",
                title: "English",
            },
            {
                id: "es",
                name: "es",
                title: "Spanish",
            },
            {
                id: "fr",
                name: "fr",
                title: "French",
            },
        ]
    }
}