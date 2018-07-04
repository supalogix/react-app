import React from "react"
import {connectAdvanced} from "react-redux"
import * as ef from "@app/events"

export function KeywordForm(props) {
    return <div className="col-lg-10 offset-lg-1">
        <section className="component-keyword-form">
            <div className="keyword-form">
                <input
                    onChange={props.onSearchTermsChanged}
                    onKeyPress={props.onKeyPress}
                    defaultValue={props.searchTerms}
                    value={props.searchTerms}
                    type="text"
                    name="keywordSearch"
                    placeholder="Keyword Search"  />
            </div>
            <div className="keyword-section">
                {
                    props.keywords.map(keyword => <div className="keyword"><span>{keyword}</span></div>)
                }
                <a onClick={props.onClearAll} className="keyword-clear">CLEAR ALL</a>
            </div>
        </section>
    </div>
}

export const sf = dispatch => state => {
    return {
        searchTerms: state.searchTerms,
        keywords: state.keywords,
        onSearchTermsChanged: e => dispatch({
            type: "SEARCH_TERMS_CHANGED",
            payload: e.currentTarget.value
        }),
        onKeyPress: e => {
            if(e.charCode === 13)
                dispatch(ef.searchResultsRequested())

            return false
        },
        onClearAll: e => {
            dispatch(ef.allCleared())
        }
    }
}

export default connectAdvanced(sf)(KeywordForm)
