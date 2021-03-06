import React from "react"
import {render} from "react-dom"
import Search from "@app/resource-search"
import {createStore, combineReducers, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reducers from "@app/reducers"
import request from "superagent"
import * as STUB from "@app/stubs"
import * as STATE from "@app/states"
import u from "updeep"

export const logger = store => next => event => {
    console.log(event)
    console.log(store.getState())
    next(event)
}
export function Format(data) {
    const keys = Object.keys(data)
    const coll = keys.reduce((acc, key) => {
        return acc.concat(data[key])
    }, [])
    const hash = coll.reduce((acc, item) => {
        return u(
            {
                [item.parentId]: {
                    id: item.parentId,
                    title: item.parentName,
                    children: [ ]
                }
            },
            acc
        )
    }, {})
    const result = coll.reduce((acc, next) => {
        const id = next.parentId
        return u.updateIn(
            `${id}.children`,
            acc[id]["children"].concat(
                {
                    id: next.childId,
                    title: next.childName,
                    description: next.description
                }
            ), 
            acc)
    }, hash)

    return result
}

export const onPageLoaded = store => next => event => (async () => {
    const {state} = store.getState()
    if(state === STATE.NOT_STARTED && event.type === "PAGE_LOADED") {
        store.dispatch({
            type: "INITIALIZATION_DATA_REQUESTED"
        })
        Promise.all([getFolderData(), getFeaturedData(), getNewData()]).then((result)=> {
            const categories = result[0]
            const data = Format(categories);
            const featuredData = result[1]
            const newData = result[2]
            store.dispatch({
                type: "INITIALIZATION_DATA_RECEIVED",
                payload: data
            })
            store.dispatch({
                type: "FEATURED_DATA_RECEIVED",
                payload: featuredData
            })
            store.dispatch({
                type: "NEW_RESOURCES_RECEIVED",
                payload: newData
            })
        })
    }

    next(event)
})()

export function getFolderData() {
    return new Promise((resolve) => {
        const url = "http://lionswebsitedev.prod.acquia-sites.com/en/v1/resource/categories"
        request
            .get(url)
            .end((error, response) => {
                const data = JSON.parse(response.text)
                resolve(data)
            })
    })
}

export function getNewData() {
    return new Promise(resolve => {
        const url = "http://lionswebsitedev.prod.acquia-sites.com/en/v1/resource/search?sortby=filename&sortdir=desc&limit=9&offset=0&query=&folderid="
        request
            .get(url)
            .end((error, response) => {
                const data = JSON.parse(response.text)
                resolve(data)
            })
    })
}

export function getFeaturedData() {
    return new Promise(resolve => {
        const url = "http://lionswebsitedev.prod.acquia-sites.com/en/v1/resource/search?sortby=filename&sortdir=desc&limit=9&offset=0&query=featured&folderid="
        request
            .get(url)
            .end((error, response) => {
                const data = JSON.parse(response.text)
                resolve(data)
            })
    })
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
                        data: JSON.parse(response.text),
                        terms: searchTerms.trim().split(" ")
                    }
                })
            })
    }
    next(event)
}

export const onFolderDataRequested = store => next => event => {
    if(event.type === "FOLDER_DATA_REQUESTED") {
        const folderId = event.payload
        const url = `http://lionswebsitedev.prod.acquia-sites.com/en/v1/resource/search?sortby=filename&sortdir=desc&limit=&offset=0&query=&folderid=${folderId}`
        request
            .get(url)
            .end((error, response) => {
                const data = JSON.parse(response.text)
                store.dispatch({
                    type: "FOLDER_DATA_RECEIVED",
                    payload: {
                        data
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
        onSearchTermsSubmitted,
        onPageLoaded,
        onFolderDataRequested
    ))

export function MockData() {
    return STUB.searchResults;
}

render(
    <Provider store={store}>
        <Search />
    </Provider>,
    document.getElementById("container")
)