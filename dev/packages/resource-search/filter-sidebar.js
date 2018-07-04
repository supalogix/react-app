import React from "react"
//import ReactDatePicker from "react-date-picker"
import ReactDatePicker from "react-datepicker"
import moment from "moment"
import "react-datepicker/dist/react-datepicker-cssmodules.css"

export const initialState = {
    keyword: "keyword sample",
    parentName: "parent name sample",
    childName: "child name sample",
    folders: [
        {
            id: "choice1-1",
            name: "choice1",
            title: "Brochure",
        },
        {
            id: "choice1-2",
            name: "choice2",
            title: "Form",
        },
        {
            id: "choice1-3",
            name: "choice3",
            title: "Photography",
        },
        {
            id: "choice1-4",
            name: "choice4",
            title: "Brand",
        },
        {
            id: "choice1-5",
            name: "choice5",
            title: "Music",
        },
        {
            id: "choice1-6",
            name: "choice6",
            title: "Presentation",
        },
    ],
    languages: [
        {
            id: "language1-1",
            name: "language1",
            title: "English",
        },
        {
            id: "language1-2",
            name: "language2",
            title: "French",
        },
        {
            id: "language1-3",
            name: "language3",
            title: "French",
        },
    ]

}

export default (props) => {
    props = initialState

    return <section className="component-filter-sidebar">

    <form id="mobileKeywordSearch">
        <input autocomplete="off" type="text" name="keywordSearch" placeholder="Keyword Search"  />
    </form>
    <div className="keyword-section">

        <div className="keyword"><span>{props.keyword}</span></div>

        <a className="keyword-clear">CLEAR ALL</a>

    </div>

    <a className="head expand" href="#">
        Topic
        <div className="open-icon"></div>
    </a>
    <ul>
        <li className="return"><a href="#">All topics</a> </li>

        <div v-for="filterTopic in filterTopics" >
            <li className="topic-header">{props.parentName}</li>
            <li v-for="filterChild in filterTopic">
                <a href="#" className="filter-child">
                    {props.childName}
                </a>
            </li>
        </div>

    </ul>
    <div className="refine-by">Refine By</div>

    <a className="head sub-head expand" href="#">
        Date
        <ReactDatePicker />
    </a>

    <a className="head sub-head expand" href="#">
        Type
        <div className="open-icon"></div>
    </a>
    <ul className="sub-filters">
        <li className="show-all"><a href="#">Show All</a></li>
        {
            props.folders.map(folder => <li>
                <label className="checkbox-button">
                    <input type="checkbox" className="checkbox-button__input" id={folder.id} name={folder.name} />
                    <span className="checkbox-button__control"></span>
                    <span className="checkbox-button__label">{folder.title}</span>
                </label>
            </li>)
        }
    </ul>

    <a className="head sub-head expand" href="#">
        Language
        <div className="open-icon"></div>
    </a>
    <ul className="sub-filters">
        <li className="show-all"><a href="#">Show All</a></li>
        {
            props.languages.map(language => <li>
                <label className="checkbox-button">
                    <input type="checkbox" className="checkbox-button__input" id={language.id} name={language.name} />
                    <span className="checkbox-button__control"></span>
                    <span className="checkbox-button__label">{language.title}</span>
                </label>
            </li>)
        }

    </ul>

</section>
}
