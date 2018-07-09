import React from "react"
import ReactDatePicker from "react-datepicker"
import moment from "moment"
import "react-datepicker/dist/react-datepicker-cssmodules.css"
import {pure} from "recompose"
import {connectAdvanced} from "react-redux"
import u from "updeep"
import * as STATE from "@app/states"

export const FilterSidebar = pure((props) => {
    return <section className="component-filter-sidebar">

        <form id="mobileKeywordSearch">
            <input 
                autocomplete="off" 
                type="text" 
                name="keywordSearch" 
                placeholder="Keyword Search"  
            />
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

            {
                props.folders.map(parent => {
                    return parent.map(child => {
                                return <li 
                                    onClick={props.onFolderClicked(child.id)}
                                    className={child.type}>{child.title}</li>
                            })
                })
            }
        </ul>
        <Filter />
    </section>;

    function Filter(filterProps) {
        if(props.state !== STATE.SHOWING_SEARCH_RESULTS)
            return <div></div>

        return <div>
            <div className="refine-by">Refine By</div>

            <span className="head sub-head expand" href="#">
                Date
                <ReactDatePicker
                    selected={props.selectedDate}
                    onChange={props.onDateChanged}
                />
            </span>
            
            <a className="head sub-head expand">
                Type
                <div className="open-icon"></div>
            </a>
            <ul className="sub-filters">
                <li className="show-all"><a href="#">Show All</a></li>
                {
                    props.types.map(type => <li>
                        <label className="checkbox-button">
                            <input 
                                checked={type.selected}
                                onChange={props.onTypeChanged(type.type)}
                                type="checkbox" 
                                className="checkbox-button__input" 
                                />
                            <span className="checkbox-button__control"></span>
                            <span className="checkbox-button__label">{type.type}</span>
                        </label>
                    </li>)
                }
            </ul>

            <a className="head sub-head expand">
                Languages
                <div className="open-icon"></div>
            </a>
            <ul className="sub-filters">
                <li className="show-all"><a href="#">Show All</a></li>
                {
                    props.languages.map(language => <li>
                        <label className="checkbox-button">
                            <input 
                                checked={language.selected}
                                onChange={props.onLanguageChanged(language.language)}
                                type="checkbox" 
                                className="checkbox-button__input" 
                                />
                            <span className="checkbox-button__control"></span>
                            <span className="checkbox-button__label">{language.language}</span>
                        </label>
                    </li>)
                }
            </ul>
        </div>
    }
})

export const sf = dispatch => state => {
    const selectedTypes = new Set(state
        .types
        .selected)
    const types =  state.types.data.map(type => {
        return {
            type,
            selected: selectedTypes.has(type)
        }
    })

    const selectedLangs = new Set(state
            .languages
            .selected)
    const languages = state.languages.data.map(language => {
        return {
            language,
            selected: selectedLangs.has(language)
        }
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

    const onTypeChanged = id => e => {
        if(selectedTypes.has(id))
            dispatch({
                type: "TYPE_DESELECTED",
                payload: id
            })
        else
            dispatch({
                type: "TYPE_SELECTED",
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
    const folders = Folders(state.folders)
    const onFolderClicked = id => e => dispatch({
        type: "FOLDER_DATA_REQUESTED",
        payload: id
    })

    return {
        keyword: "keyword sample",
        parentName: "parent name sample",
        childName: "child name sample",
        state: state.state,
        selectedDate,
        types,
        folders,
        languages,
        onLanguageChanged,
        onFolderChanged,
        onDateChanged,
        onTypeChanged,
        onFolderClicked
    }
}

export default connectAdvanced(sf)(FilterSidebar)

export function Folders(folders) {
    const keys = Object.keys(folders)
    const list = []
    keys.forEach(key => {
        const folder = folders[key]
        const parent = {
            id: "",
            title: folder.title,
            type: "topic-header"
        }
        list.push(
            []
                .concat(parent)
                .concat(folder.children.map(item => 
                    u(
                        {
                            type: "filter-child"
                        },
                        item
                    )
                ))
        )
    })
    return list
}