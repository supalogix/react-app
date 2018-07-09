import React from "react"
import {connectAdvanced} from "react-redux"
import ResourceControls from "./resource-controls"
import GlobalCard from "./global-card"
import * as STATE from "../states"
import FeaturedResources from "./featured-resources"
import NewResources from "./new-resources"

export function ListView(props) {
    if(isLanding(props.state))
        return <LandingPage />

    return <div className="row">
        <ResourceControls />
        {
            props.results.map(card => 
                <div class="col-md-6 col-lg-4">
                    <GlobalCard {...card} />
                </div>
            )
        }
    </div>
}

export const sf = dispatch => state => {
    const start = state.selectedPage * 9
    const end = (state.selectedPage * 9) + 9
    const dir = (state.resultsSortOrder === "OLDEST")
        ? -1
        : 1
    const selected = new Set(state.languages.selected)
    const selectedTypes = new Set(state.types.selected)
    const selectedDate = state.selectedDate

    const results = state
        .results
        .filter(item => {
            if(selectedTypes.size === 0)
                return true

            return selectedTypes.has(item.type)
        })
        .filter(item => {
            if(selected.size === 0)
                return true

            return selected.has(item.language)
        })
        .filter(item => {
            if(selectedDate === "")
                return true
            
            const year = selectedDate.year()
            const day = selectedDate.date().toString().padStart(2, "0")
            const month = (selectedDate.month() + 1).toString().padStart(2, "0")
            const date = `${year}-${month}-${day}`
           
            return (item.datecaptured || "").indexOf(date) > -1 
        })
        .sort((lhs, rhs) => {
            if(lhs.datecreated < rhs.datecreated)
                return -1*dir
            else if(lhs.datecreated > rhs.datecreated)
                return 1*dir
            else 
                return 0
        })
        .slice(start, end)

    return {
        results,
        state: state.state
    }
}

export default connectAdvanced(sf)(ListView)

export function isLanding(state) {
    return state === STATE.LANDING
}

export function LandingPage(props) {
        return <div>
            <FeaturedResources />
            <NewResources />
        </div>
}


