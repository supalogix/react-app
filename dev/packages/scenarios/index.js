import * as ef from "@app/events"
import * as STUB from "@app/stubs"

export const PAGE_LOADED = [ 
    ef.pageLoaded()
]

export const SEARCH_TERMS_CHANGED = PAGE_LOADED.concat([
    ef.searchTermsChanged("lions")
])

export const SEARCH_RESULTS_REQUESTED = SEARCH_TERMS_CHANGED.concat([
    ef.searchResultsRequested()
])

export const SEARCH_RESULTS_RECEIVED = SEARCH_RESULTS_REQUESTED.concat([
    ef.searchResultsReceived({
        data: STUB.searchResults,
        terms: ["lions"]
    })
])