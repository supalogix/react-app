import React from "react"
import ReactDatePicker from "react-datepicker"
import moment from "moment"
import "react-datepicker/dist/react-datepicker-cssmodules.css"
import {pure} from "recompose"
import {connectAdvanced} from "react-redux"
import u from "updeep"

export const FilterSidebar = pure((props) => {
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

    <span className="head sub-head expand" href="#">
        Date
        <ReactDatePicker
            selected={props.selectedDate}
            onChange={props.onDateChanged}
        />
    </span>

    <a className="head sub-head expand" href="#">
        Type
        <div className="open-icon"></div>
    </a>
    <ul className="sub-filters">
        <li className="show-all"><a href="#">Show All</a></li>
        {
            props.folders.map(folder => <li>
                <label className="checkbox-button">
                    <input 
                        checked={folder.selected}
                        onChange={props.onFolderChanged(folder.id)}
                        type="checkbox" 
                        className="checkbox-button__input" 
                        id={folder.id} 
                        name={folder.name} />
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
                    <input 
                        type="checkbox" 
                        checked={language.selected}
                        onChange={props.onLanguageChanged(language.id)}
                        className="checkbox-button__input" 
                        id={language.id} 
                        name={language.name} />
                    <span className="checkbox-button__control"></span>
                    <span className="checkbox-button__label">{language.title}</span>
                </label>
            </li>)
        }

    </ul>

</section>
})

export const sf = dispatch => state => {
    const selectedFolders = new Set(state.folders.selected)
    const folders =  state.folders.data.map(folder => {
        return u(
            {
                selected: selectedFolders.has(folder.id)
            },
            folder
        )
    })

    const selectedLangs = new Set(state.languages.selected)
    const languages = state.languages.data.map(lang => {
        return u(
            {
                selected: selectedLangs.has(lang.id)
            },
            lang
        )
    })
    const onLanguageChanged = id => e => {
        if(selectedLangs.has(id))
            dispatch({
                type: "LANGUAGE_DESELECTED",
                payload: id
            })
        else
            dispatch({
                type: "LANGUAGE_SELECTED",
                payload: id
            })
    }
    const onFolderChanged = id => e => {
        if(selectedFolders.has(id))
            dispatch({
                type: "FOLDER_DESELECTED",
                payload: id
            })
        else
            dispatch({
                type: "FOLDER_SELECTED",
                payload: id
            })
    }
    const selectedDate = state.selectedDate
    const onDateChanged = e => {
        dispatch({
            type: "DATE_CHANGED",
            payload: e
        })
    }
    return {
        keyword: "keyword sample",
        parentName: "parent name sample",
        childName: "child name sample",
        selectedDate,
        folders,
        languages,
        onLanguageChanged,
        onFolderChanged,
        onDateChanged
    }
}

export default connectAdvanced(sf)(FilterSidebar)