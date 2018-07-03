import React from "react"
import {connectAdvanced} from "react-redux"
import * as STATE from "../states"
import {
    pagedForward,
    pagedBackward,
    sortOrderChanged
} from "@app/events"

export const ResourceControls = props => {
    if(isLoading(props.state))
        return <div className="resource-controls" style={{display: "block"}}>
            <h4 className="total-resources"><span id="totalResources">Loading</span> Resources</h4>
        </div>

    if(isSearchResults(props.state))
        return <div className="resource-controls" style={{display: "block"}}>
            <div className="resource-pagination-control">
                <a onClick={props.onPageBackward} id="paginationBack" className="pagination-back inactive"></a>
                <span id="paginationCurrent" className="current">{props.current}</span> /
                <span id="paginationTotal" className="total">{props.total}</span>
                <a onClick={props.onPageForward} id="paginationNext" className="pagination-next"></a>
            </div>
            <div className="mobile-card-status">
                <span id="currentViewItems">{props.currentViewItems}</span> of <span id="totalItems">{props.totalItems}</span>
            </div>

            <div className="resource-sort" data-prefix="Sort by:">
                <select onChange={props.onChangeSortOrder}>
                    <option value="OLDEST">Oldest</option>
                    <option value="NEWEST">Newest</option>
                </select>
            </div>
        </div>

    return <div></div>
}

export const sf = dispatch => state => {
    const total = Math.ceil(state.results.length / 9)
    const onChangeSortOrder = e => dispatch(
        sortOrderChanged(e.currentTarget.value))
    const onPageForward = () => {
        if(state.selectedPage >= total - 1)
            return

        dispatch(pagedForward())
    }
    const onPageBackward = () => {
        if(state.selectedPage <= 0)
            return
            
        dispatch(pagedBackward())
    }

    return {
        state: state.state,
        currentViewItems: "1",
        totalItems: "4",
        current: state.selectedPage + 1,
        total,
        onPageForward,
        onPageBackward,
        onChangeSortOrder
    }
}

export default connectAdvanced(sf)(ResourceControls)

export function isLoading(state) {
    return state === STATE.WAITING_FOR_RESULTS
}

export function isSearchResults(state) {
    return state === STATE.SHOWING_SEARCH_RESULTS
}
