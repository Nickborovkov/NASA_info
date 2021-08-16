import React, {useEffect, useState} from "react";
import s from './nasaLibrary.module.css'
import m from './nasaLibraryMedia.module.css'
import cn from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {getSearchResult, nextPage, prevPage, setSearchStart} from "../../reducers/nasaLibrary";
import Preloader from "../../helpers/preloaders/preloader";
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import {setNewError} from "../../reducers/errors";
import imagePlaceHolder from "../../images/imagePlaceholder.jpg";
import LazyLoad from 'react-lazyload'
import ModalWindow from "../../helpers/modalWindow/modalWindow";

const NasaLibrary = () => {

    const dispatch = useDispatch()
    const isFetching = useSelector(state => state.library.isFetching)
    const result = useSelector(state => state.library.result)
    const currentSearch = useSelector(state => state.library.currentSearch)
    const mediaType = useSelector(state => state.library.mediaType)
    const yearStart = useSelector(state => state.library.yearStart)
    const yearEnd = useSelector(state => state.library.yearEnd)
    const page = useSelector(state => state.library.page)
    const totalPages = useSelector(state => state.library.totalPages)
    const error = useSelector(state => state.errors.error)
    const searchStart = useSelector(state => state.library.searchStart)

    const [modalWindow, setModalWindow] = useState(false)
    const [modalSrc, setModalSrc] = useState(``)

    useEffect(()=>{
        dispatch(getSearchResult(currentSearch, mediaType, yearStart, yearEnd, page))
        window.scrollTo(0, 0)
    },[dispatch, currentSearch, mediaType, yearStart, yearEnd, page])

    useEffect(()=>{
        dispatch(setNewError(null))
    },[dispatch])

    useEffect(()=>{
        dispatch(setSearchStart(false))
    },[dispatch, searchStart])


    return (
        <div className={s.nasaLibrary}>
            <h2 className={cn(s.title, m.title)}>NASA photo and Video library</h2>

            {!result && error &&
            <div className={s.errorCase}>No results for this search</div>}

            {!result && !error &&
            <Preloader/>}

            {result && !error &&
            <div>
                {isFetching && <Preloader />}
                {!isFetching &&
                <div className={s.imagesArray}>
                    {
                        result.map(r => <div className={s.imageHolder} key={result.indexOf(r)}>
                            <LazyLoad height={300}>
                                <img className={s.image}
                                     src={r.links[0].href}
                                     alt="archivePhoto"
                                     onClick={ (e) => {
                                         setModalSrc(e.currentTarget.src)
                                         setModalWindow(true)
                                     } }
                                     onError={ (e) => {e.target.src = imagePlaceHolder}}/>
                            </LazyLoad>

                            <ModalWindow active={modalWindow}
                                         setActive={setModalWindow}
                                         src={modalSrc}/>

                        </div>)
                    }
                </div>
                }
                <div className={s.buttonsHolder}>
                    {
                        page > 1 &&
                        <MdNavigateBefore className={s.pageButton}
                                          onClick={ () => {dispatch(prevPage())} }/>
                    }
                    {
                        page !== totalPages &&
                        <MdNavigateNext className={s.pageButton}
                                        onClick={ () => {dispatch(nextPage())} }/>
                    }
                </div>
            </div>}

        </div>
    )
}

export default NasaLibrary