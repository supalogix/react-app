import React from "react"
import {render} from "react-dom"
import Search from "@app/resource-search"
import {createStore, combineReducers, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reducers from "@app/reducers"
import request from "superagent"
import * as STUB from "@app/stubs"

export const logger = store => next => event => {
    console.log(event)
    console.log(store.getState())
    next(event)
}

export const onSearchTermsSubmitted = store => next => event => {
    if(event.type === "SEARCH_RESULTS_REQUESTED") {
        const {
            searchTerms
        } = store.getState()

        const url = `http://lionswebsitedev.prod.acquia-sites.com/en/v1/resource/search?sortby=filename&sortdir=desc&limit=10&offset=0&query=${searchTerms}&folderid=`
        request
            .get(url)
            .end((error, response) => {
                store.dispatch({
                    type: "SEARCH_RESULTS_RECEIVED",
                    payload: {
                        data: MockData(),
                        terms: searchTerms.trim().split(" ")
                    }
                })
            })
    }
    next(event)
}

export const store = createStore(
    combineReducers(reducers),
    applyMiddleware(
        logger,
        onSearchTermsSubmitted
    ))
export const start = () => {
    render(
        <Provider store={store}>
            <Search />
        </Provider>,
        document.getElementById("container")
    )
}

export function MockData() {
    return STUB.searchResults;
}
