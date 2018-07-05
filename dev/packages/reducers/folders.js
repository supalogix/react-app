import u from "updeep"

export const initialState = InitialState()

export default (state = initialState, event = {}) => {
    if(event.type === "FOLDER_DESELECTED") {
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
    if(event.type === "FOLDER_SELECTED") {
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
            "choice1-1"
        ],
        data: [
            {
                id: "choice1-1",
                name: "choice1",
                title: "Brochure",
            },
            {
                id: "choice1-2",
                name: "choice2",
                title: "Form",
            },
            {
                id: "choice1-3",
                name: "choice3",
                title: "Photography",
            },
            {
                id: "choice1-4",
                name: "choice4",
                title: "Brand",
            },
            {
                id: "choice1-5",
                name: "choice5",
                title: "Music",
            },
            {
                id: "choice1-6",
                name: "choice6",
                title: "Presentation",
            },
        ]
    }
}