import u from "updeep"

export default (state = InitialState(), event = {}) => {
    return state
}

export function InitialState() {
    return [
        {
            id: "1",
            title: "District (45)",
            children: [
                {
                    id: "2",
                    title: "District Govenors (10)",
                    url: ""
                },
                {
                    id: "3",
                    title: "Zone + Region Chairpersons (10)",
                    url: ""
                },
                {
                    id: "4",
                    title: "e-District House(10)",
                    url: ""
                },
                {
                    id: "5",
                    title: "District Convention (15)",
                    url: ""
                },
            ]
        },
        {
            id: "11",
            title: "Lions Club (45)",
            children: [
                {
                    id: "12",
                    title: "District Govenors (10)",
                    url: ""
                },
                {
                    id: "13",
                    title: "Zone + Region Chairpersons (10)",
                    url: ""
                },
                {
                    id: "14",
                    title: "e-District House(10)",
                    url: ""
                },
            ]
        }
    ]
}