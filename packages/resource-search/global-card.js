import React from "react"

export const initialState = {
    "cardType": "resource",
    "category": "report new",
    "cardIcon": "pdf",
    "bgClass": "navy",
    "clubType": "Lions",
    "bgImg": "https:\/\/cdn4.webdamdb.com\/md_Q78OgPVLB92.jpg.pdf?v=1",
    "pages": "145",
    "title": "zone chairperson slides 9.ppt",
    "download": "https:\/\/cdn4.webdamdb.com\/md_Q78OgPVLB92.jpg.pdf?v=1",
    "description": "",
    "size": "1.87",
    "type": "ppt",
    "id": "75767421",
    "showImage": 1,
    "datecreated": "2018-06-10 20:39:07",
    "datecaptured": "2009-01-29 23:12:51",
    "datemodified": "2018-06-14 18:58:50",
  }

export default Master

export function Master(props) {
    const mediaBoxStyle = {
        backgroundImage: `url(${props.bgImg})`
    }
    const mediaBoxClassNames = `media-box ${props.bgClass} ${props.cardType} ${props.showImage}`
    const className = `tile ${props.cardType}`

    return <div class="col-md-6 col-lg-4">
        <section className="component-global-card">
            <div className={className}>
                <a href={props.download}>
                    <div>{props.id}</div>
                    <div style={mediaBoxStyle} className={mediaBoxClassNames}>
                        <div className="top-bar">
                            <div className="description">
                                {props.category}
                            </div>
                        </div>
                        <div className={`img-container ${props.cardIcon}`}>
                            <Audio {...props} />
                            <Video {...props} />
                        </div>
                    </div>
                    <Resource {...props} />
                </a>
            </div>

            <VideoModal {...props} />
        </section>
    </div>
}

export function Video(props) {
    if(props.bgClass !== "video")
        return <div></div>

    const href = `#${props.guid}`
    const className = `img-container ${props.cardIcon}`

    return <a href={href} className="video-link"></a>
}

export function Audio(props) {
    if(props.bgClass !== "audio")
        return <div></div>

    return <a href="#" className="audio-link">
        <audio controls>
            <source src={props.download} type="audio/ogg" />
        </audio>
    </a>

}

export function VideoModal(props) {
    if(props.bgClass !== "video")
        return <div></div>

    return <div id={props.guid} className="modalDialog">
            <div>
                <a href="#close" title="Close" className="close">X</a>
                <video controls id="myVideo">
                    <source src={props.download} type="video/mp4" />
                </video>
            </div>
        </div>

}


export function Resource(props) {
    if(props.cardType !== "resource")
        return <div></div>

    const className = `text-container ${props.cardType}`

    return <div className={className}>
        <div className="details">
            <div className="detail-block">
                <span className="label">Type</span>
                <span className="detail">{props.type}</span>
            </div>
            <div className="detail-block">
                <span className="label">Size</span>
                <span className="detail">{props.size}</span>
            </div>
            <div className="detail-block">
                <span className="label">Pages</span>
                <span className="detail">{props.pages}</span>
            </div>
        </div>
        <div className="separator"></div>
        <div className="tile-caption">
            {props.title}
        </div>
        <div className="tile-body">
            {props.description}
        </div>
        <div className="tile-action">
            <a href={props.download} target="_blank" download>download</a>
        </div>
    </div>
}
