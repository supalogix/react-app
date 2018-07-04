import React from "react"
import {connectAdvanced} from "react-redux"
import ResourceControls from "./resource-controls"
import GlobalCard from "./global-card"
import * as STATE from "../states"

export function ListView(props) {
    if(isLanding(props.state))
        return <LandingPage />

    return <div className="row">
        <ResourceControls />
        {
            props.results.map(card => <GlobalCard {...card} />)
        }
    </div>
}

export const sf = dispatch => state => {
    const start = state.selectedPage * 9
    const end = (state.selectedPage * 9) + 9
    const dir = (state.resultsSortOrder === "OLDEST")
        ? -1
        : 1

    const results = state
        .results
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

export function FeaturedResources(props) {
    return <section className="component-resource-featured pad-top-lg pad-bot-lg">
        <div className="container">
            <div className="tile-container">
                <h3>Featured Resources</h3>
                <div className="separator"></div>
                <div className="row">
                    <div className="col-md-3">
                        <section className="component-global-card">
                            <a href="#"></a><div className="tile resource">
                                <a href="#"></a><div className="media-box navy Lions"
                                    style={{backgroundImage: "url('https://cdn4.webdamdb.com/md_VKQ9YFSoBolt.mp4')"}}
                                    >
                                    <a href="#"></a><div className="top-bar">
                                        <a href="#">
                                            <div className="description">
                                                report new
                                            </div>
                                        </a><div className="dropdown hidden"><a href="#"><i className="fa fa-ellipsis-h"></i></a><div className="dropdown-content"><a href="#"></a><ul><a href="#"></a><li><a href="#"></a><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li></ul></div></div>
                                    </div> <div className="img-container pdf"></div>
                                </div> <div className="text-container resource">
                                    <div className="details"><div className="detail-block"><span className="label">Type</span> <span className="detail">mp4</span></div> <div className="detail-block"><span className="label">Size</span> <span className="detail">29.36</span></div> <div className="detail-block"><span className="label">Pages</span> <span className="detail">0</span></div></div> <div className="separator"></div> <div className="tile-caption">
                                        2017-10-09 10.03 Webdam_LCI - Admin Training Continuation.mp4
                                    </div> <div className="tile-body">

                                    </div> <div className="tile-action"><a href="https://cdn4.webdamdb.com/md_VKQ9YFSoBolt.mp4" target="_blank">download</a></div>
                                </div>
                            </div> <div id="" className="modalDialog"><div><a href="#close" title="Close" className="close">X</a> <video controls="controls" id="myVideo"><source src="" type="video/mp4" /></video></div></div>
                        </section>
                    </div>
                    <div className="col-md-3">
                        <section className="component-global-card">
                            <a href="#"></a><div className="tile resource">
                                <a href="#"></a><div className="media-box navy Lions"
                                    style={{backgroundImage: "url('https://cdn4.webdamdb.com/1280_GmFblLiGfaZo.png?1510760412?1510760412')"}}
                                    >
                                    <a href="#"></a><div className="top-bar">
                                        <a href="#">
                                            <div className="description">
                                                report new
                                            </div>
                                        </a><div className="dropdown hidden"><a href="#"><i className="fa fa-ellipsis-h"></i></a><div className="dropdown-content"><a href="#"></a><ul><a href="#"></a><li><a href="#"></a><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li></ul></div></div>
                                    </div> <div className="img-container pdf"></div>
                                </div> <div className="text-container resource">
                                    <div className="details"><div className="detail-block"><span className="label">Type</span> <span className="detail">eps</span></div> <div className="detail-block"><span className="label">Size</span> <span className="detail">0.42</span></div> <div className="detail-block"><span className="label">Pages</span> <span className="detail">0</span></div></div> <div className="separator"></div> <div className="tile-caption">
                                        LCI emblem_1C_CMYK_small.eps
                                    </div> <div className="tile-body">

                                    </div> <div className="tile-action"><a href="https://cdn4.webdamdb.com/1280_GmFblLiGfaZo.png?1510760412?1510760412" target="_blank">download</a></div>
                                </div>
                            </div> <div id="" className="modalDialog"><div><a href="#close" title="Close" className="close">X</a> <video controls="controls" id="myVideo"><source src="" type="video/mp4" /></video></div></div>
                        </section>
                    </div>
                    <div className="col-md-3">
                        <section className="component-global-card">
                            <a href="#"></a><div className="tile resource">
                                <a href="#"></a><div className="media-box navy Lions"
                                    style={{backgroundImage: "url('https://cdn4.webdamdb.com/1280_0ZmnpkQWt0SV.jpg?1510760411?1510760411')"}}
                                >
                                    <a href="#"></a><div className="top-bar">
                                        <a href="#">
                                            <div className="description">
                                                report new
                                            </div>
                                        </a><div className="dropdown hidden"><a href="#"><i className="fa fa-ellipsis-h"></i></a><div className="dropdown-content"><a href="#"></a><ul><a href="#"></a><li><a href="#"></a><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li></ul></div></div>
                                    </div> <div className="img-container pdf"></div>
                                </div> <div className="text-container resource">
                                    <div className="details"><div className="detail-block"><span className="label">Type</span> <span className="detail">jpg</span></div> <div className="detail-block"><span className="label">Size</span> <span className="detail">0.22</span></div> <div className="detail-block"><span className="label">Pages</span> <span className="detail">0</span></div></div> <div className="separator"></div> <div className="tile-caption">
                                        LCI emblem_1C_RGB_small.jpg
                                    </div> <div className="tile-body">

                                    </div> <div className="tile-action"><a href="https://cdn4.webdamdb.com/1280_0ZmnpkQWt0SV.jpg?1510760411?1510760411" target="_blank">download</a></div>
                                </div>
                            </div> <div id="" className="modalDialog"><div><a href="#close" title="Close" className="close">X</a> <video controls="controls" id="myVideo"><source src="" type="video/mp4" /></video></div></div>
                        </section>
                    </div>
                    <div className="col-md-3">
                        <section className="component-global-card">
                            <a href="#"></a><div className="tile resource">
                                <a href="#"></a><div className="media-box navy Lions"
                                    style={{backgroundImage: "url('https://cdn4.webdamdb.com/1280_ERjkQRMtbtxL.png?1510760420?1510760420')"}}
                                    >
                                    <a href="#"></a><div className="top-bar">
                                        <a href="#">
                                            <div className="description">
                                                report new
                                            </div>
                                        </a><div className="dropdown hidden"><a href="#"><i className="fa fa-ellipsis-h"></i></a><div className="dropdown-content"><a href="#"></a><ul><a href="#"></a><li><a href="#"></a><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li></ul></div></div>
                                    </div> <div className="img-container pdf"></div>
                                </div> <div className="text-container resource">
                                    <div className="details"><div className="detail-block"><span className="label">Type</span> <span className="detail">eps</span></div> <div className="detail-block"><span className="label">Size</span> <span className="detail">0.45</span></div> <div className="detail-block"><span className="label">Pages</span> <span className="detail">0</span></div></div> <div className="separator"></div> <div className="tile-caption">
                                        LCI emblem_2C_287+7406.eps
                                    </div> <div className="tile-body">

                                    </div> <div className="tile-action"><a href="https://cdn4.webdamdb.com/1280_ERjkQRMtbtxL.png?1510760420?1510760420" target="_blank">download</a></div>
                                </div>
                            </div> <div id="" className="modalDialog"><div><a href="#close" title="Close" className="close">X</a> <video controls="controls" id="myVideo"><source src="" type="video/mp4" /></video></div></div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export function NewResources(props) {
    return <section className="component-resource-featured pad-top-lg pad-bot-lg">
        <div className="container">
            <div className="tile-container">
                <h3>New Resources</h3>
                <div className="separator"></div>
                <div className="row">
                    <div className="col-md-3">
                        <section className="component-global-card">
                            <a href="#"></a><div className="tile resource">
                                <a href="#"></a><div className="media-box navy Lions"
                                    style={{backgroundImage: "url('https://cdn4.webdamdb.com/md_VKQ9YFSoBolt.mp4')"}}
                                    >
                                    <a href="#"></a><div className="top-bar">
                                        <a href="#">
                                            <div className="description">
                                                report new
                                            </div>
                                        </a><div className="dropdown hidden"><a href="#"><i className="fa fa-ellipsis-h"></i></a><div className="dropdown-content"><a href="#"></a><ul><a href="#"></a><li><a href="#"></a><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li></ul></div></div>
                                    </div> <div className="img-container pdf"></div>
                                </div> <div className="text-container resource">
                                    <div className="details"><div className="detail-block"><span className="label">Type</span> <span className="detail">mp4</span></div> <div className="detail-block"><span className="label">Size</span> <span className="detail">29.36</span></div> <div className="detail-block"><span className="label">Pages</span> <span className="detail">0</span></div></div> <div className="separator"></div> <div className="tile-caption">
                                        2017-10-09 10.03 Webdam_LCI - Admin Training Continuation.mp4
                                    </div> <div className="tile-body">

                                    </div> <div className="tile-action"><a href="https://cdn4.webdamdb.com/md_VKQ9YFSoBolt.mp4" target="_blank">download</a></div>
                                </div>
                            </div> <div id="" className="modalDialog"><div><a href="#close" title="Close" className="close">X</a> <video controls="controls" id="myVideo"><source src="" type="video/mp4" /></video></div></div>
                        </section>
                    </div>
                    <div className="col-md-3">
                        <section className="component-global-card">
                            <a href="#"></a><div className="tile resource">
                                <a href="#"></a><div className="media-box navy Lions"
                                    style={{backgroundImage: "url('https://cdn4.webdamdb.com/1280_GmFblLiGfaZo.png?1510760412?1510760412')"}}
                                    >
                                    <a href="#"></a><div className="top-bar">
                                        <a href="#">
                                            <div className="description">
                                                report new
                                            </div>
                                        </a><div className="dropdown hidden"><a href="#"><i className="fa fa-ellipsis-h"></i></a><div className="dropdown-content"><a href="#"></a><ul><a href="#"></a><li><a href="#"></a><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li></ul></div></div>
                                    </div> <div className="img-container pdf"></div>
                                </div> <div className="text-container resource">
                                    <div className="details"><div className="detail-block"><span className="label">Type</span> <span className="detail">eps</span></div> <div className="detail-block"><span className="label">Size</span> <span className="detail">0.42</span></div> <div className="detail-block"><span className="label">Pages</span> <span className="detail">0</span></div></div> <div className="separator"></div> <div className="tile-caption">
                                        LCI emblem_1C_CMYK_small.eps
                                    </div> <div className="tile-body">

                                    </div> <div className="tile-action"><a href="https://cdn4.webdamdb.com/1280_GmFblLiGfaZo.png?1510760412?1510760412" target="_blank">download</a></div>
                                </div>
                            </div> <div id="" className="modalDialog"><div><a href="#close" title="Close" className="close">X</a> <video controls="controls" id="myVideo"><source src="" type="video/mp4" /></video></div></div>
                        </section>
                    </div>
                    <div className="col-md-3">
                        <section className="component-global-card">
                            <a href="#"></a><div className="tile resource">
                                <a href="#"></a><div className="media-box navy Lions"
                                    style={{backgroundImage: "url('https://cdn4.webdamdb.com/1280_0ZmnpkQWt0SV.jpg?1510760411?1510760411')"}}
                                >
                                    <a href="#"></a><div className="top-bar">
                                        <a href="#">
                                            <div className="description">
                                                report new
                                            </div>
                                        </a><div className="dropdown hidden"><a href="#"><i className="fa fa-ellipsis-h"></i></a><div className="dropdown-content"><a href="#"></a><ul><a href="#"></a><li><a href="#"></a><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li></ul></div></div>
                                    </div> <div className="img-container pdf"></div>
                                </div> <div className="text-container resource">
                                    <div className="details"><div className="detail-block"><span className="label">Type</span> <span className="detail">jpg</span></div> <div className="detail-block"><span className="label">Size</span> <span className="detail">0.22</span></div> <div className="detail-block"><span className="label">Pages</span> <span className="detail">0</span></div></div> <div className="separator"></div> <div className="tile-caption">
                                        LCI emblem_1C_RGB_small.jpg
                                    </div> <div className="tile-body">

                                    </div> <div className="tile-action"><a href="https://cdn4.webdamdb.com/1280_0ZmnpkQWt0SV.jpg?1510760411?1510760411" target="_blank">download</a></div>
                                </div>
                            </div> <div id="" className="modalDialog"><div><a href="#close" title="Close" className="close">X</a> <video controls="controls" id="myVideo"><source src="" type="video/mp4" /></video></div></div>
                        </section>
                    </div>
                    <div className="col-md-3">
                        <section className="component-global-card">
                            <a href="#"></a><div className="tile resource">
                                <a href="#"></a><div className="media-box navy Lions"
                                    style={{backgroundImage: "url('https://cdn4.webdamdb.com/1280_ERjkQRMtbtxL.png?1510760420?1510760420')"}}
                                    >
                                    <a href="#"></a><div className="top-bar">
                                        <a href="#">
                                            <div className="description">
                                                report new
                                            </div>
                                        </a><div className="dropdown hidden"><a href="#"><i className="fa fa-ellipsis-h"></i></a><div className="dropdown-content"><a href="#"></a><ul><a href="#"></a><li><a href="#"></a><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li> <li><a href="#">Test</a></li></ul></div></div>
                                    </div> <div className="img-container pdf"></div>
                                </div> <div className="text-container resource">
                                    <div className="details"><div className="detail-block"><span className="label">Type</span> <span className="detail">eps</span></div> <div className="detail-block"><span className="label">Size</span> <span className="detail">0.45</span></div> <div className="detail-block"><span className="label">Pages</span> <span className="detail">0</span></div></div> <div className="separator"></div> <div className="tile-caption">
                                        LCI emblem_2C_287+7406.eps
                                    </div> <div className="tile-body">

                                    </div> <div className="tile-action"><a href="https://cdn4.webdamdb.com/1280_ERjkQRMtbtxL.png?1510760420?1510760420" target="_blank">download</a></div>
                                </div>
                            </div> <div id="" className="modalDialog"><div><a href="#close" title="Close" className="close">X</a> <video controls="controls" id="myVideo"><source src="" type="video/mp4" /></video></div></div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
