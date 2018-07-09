import React from "react"
import GlobalCard from "./global-card"
import {connectAdvanced} from "react-redux"

export const sf = dispatch => state => {
    return {
        results: state.newResources.slice(0, 4)
    }
}

export default connectAdvanced(sf)(NewResources)

export function NewResources(props) {
    return <section className="component-resource-featured pad-top-lg pad-bot-lg">
        <div className="container">
            <div className="tile-container">
                <h3>New Resources</h3>
                <div className="separator"></div>
                <div className="row">
                    {
                        props.results.map(card => 
                            <div className="col-md-3">
                                <GlobalCard {...card} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </section>
}