import React from "react"

export const initialState = {

}

export default props => {
    props = initialState

    return <div className="mobile-filter-controls">
        <a className="reset" href="#">Reset</a>
        <a className="btn bg-secondary-d4-cornflower" id="filter-btn">Filters</a>
    </div>
}
