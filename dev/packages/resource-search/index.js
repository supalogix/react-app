import React from "react"
import FilterSidebar from "./filter-sidebar"
import FilterControls from "./filter-controls"
import ResourceControls from "./resource-controls"
import GlobalCard from "./global-card"
import Header from "./header"
import ListView from "./list-view"
import KeywordForm from "./keyword-form"
import {connectAdvanced} from "react-redux"
import * as STATE from "@app/states"

export class SearchPage extends React.PureComponent {
    componentDidMount() {
        this.props.onComponentDidMount()
    }

    render() {
        const {state} = this.props

        if(
            (state === STATE.NOT_STARTED) || 
            (state === STATE.INITIALIZING)
        )
            return <div>LOADING</div>

        return <section className="component-resource-center">
            <div className="container">
                <div className="page-wrapper">
                    <Header />
                    <ResourceCenter />
                </div>
            </div>
        </section>
    }
}

export const sf = dispatch => state => {
    return {
        state: state.state,
        onComponentDidMount: () => {
            dispatch({
                type: "PAGE_LOADED"
            })
        }
    }
}

export default connectAdvanced(sf)(SearchPage)


export function ResourceCenter(props) {
    return <div id="ResourceCenter" className="resource-cards">
        <div className="row">
            <KeywordForm />
            <Sidebar />
            <Main />
        </div>
    </div>
}

export function Sidebar(props) {
    return <div class="col-md-4 col-lg-2 offset-lg-1">
        <FilterSidebar />
        <FilterControls />
    </div>
}

export function Main(props) {
    return <div class="col-md-7-5 col-md-push-0-5">
        <ListView />
    </div>
}
