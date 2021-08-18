import {nasaRequest} from "../serverRequests/serverRequests";
import {setNewError} from "./errors";
import axios from "axios";

const SET_SEARCH_RESULT = `nasa/nasaLibrary/SET_SEARCH_RESULT`
const SET_SEARCH_START = `nasa/nasaLibrary/SET_SEARCH_START`
const TOGGLE_FETCHING = `nasa/nasaLibrary/TOGGLE_FETCHING`
const SET_CURRENT_SEARCH = `nasa/nasaLibrary/SET_CURRENT_SEARCH`
const SET_VIDEOS_LINKS = `nasa/nasaLibrary/SET_VIDEOS_LINKS`
const SET_TOTAL_PAGES = `nasa/nasaLibrary/SET_TOTAL_PAGES`
const SET_PARAMS = `nasa/nasaLibrary/SET_PARAMS`
const NEXT_PAGE = `nasa/nasaLibrary/NEXT_PAGE`
const PREV_PAGE = `nasa/nasaLibrary/PREV_PAGE`


const initialState = {
    result: null,
    currentSearch: null,
    searchStart: false,
    videosLinks: [],
    mediaType: `image`,
    yearStart: `2005`,
    yearEnd: `2021`,
    totalPages: ``,
    page: 1,
    isFetching: false,
}


const nasaLibraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            return {
                ...state,
                result: action.result
            }
        case SET_CURRENT_SEARCH:
            return {
                ...state,
                currentSearch: action.currentSearch
            }
        case SET_SEARCH_START:
            return {
                ...state,
                searchStart: action.searchStart
            }
        case SET_VIDEOS_LINKS:
            return {
                ...state,
                videosLinks: action.videosLinks,
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_PARAMS:
            return {
                ...state,
                mediaType: action.mediaType ,
                yearStart: action.yearStart ,
                yearEnd: action.yearEnd ,
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: Math.ceil(action.totalPages / 100)
            }
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case PREV_PAGE:
            return {
                ...state,
                page: state.page - 1
            }
        default:
            return state
    }
}


export default nasaLibraryReducer


//AC
const setSearchResult = (result) =>
    ( { type:  SET_SEARCH_RESULT, result} )

export const setSearchStart = (searchStart) =>
    ( { type:  SET_SEARCH_START, searchStart} )

export const setVideosLinks = (videosLinks) =>
    ( { type:  SET_VIDEOS_LINKS, videosLinks} )

export const setCurrentSearch = (currentSearch) =>
    ( { type:  SET_CURRENT_SEARCH, currentSearch} )

export const toggleFetching = (isFetching) =>
    ( { type:  TOGGLE_FETCHING, isFetching} )

export const setParamsLibrary = (mediaType, yearStart, yearEnd) =>
    ( { type:  SET_PARAMS, mediaType, yearStart, yearEnd} )

export const nextPage = () =>
    ( { type:  NEXT_PAGE} )

export const prevPage = () =>
    ( { type:  PREV_PAGE} )

export const setTotalPages = (totalPages) =>
    ( { type:  SET_TOTAL_PAGES, totalPages} )



//THUNK
export const getSearchResult = (search, mediaType, yearStart, yearEnd, page) => async dispatch => {
    try {
        dispatch(setSearchResult(null))
        dispatch(setSearchStart(true))
        dispatch(toggleFetching(true))
        const response = await nasaRequest.searchNasaLibrary(search, mediaType, yearStart, yearEnd, page)
        dispatch(toggleFetching(false))
        if(response.data.collection.metadata.total_hits !== 0){
            dispatch(setSearchResult(response.data.collection.items))
            dispatch(setTotalPages(response.data.collection.metadata.total_hits))
        }else {
            dispatch(setNewError(`No results for search`))
        }

    }catch (error) {
        dispatch(setNewError(error))
    }


}

export const getVideoLinks = (json) => async dispatch => {
    const response = await axios.get(json.toString())
    dispatch(setVideosLinks(response.data))
}