import React, {useEffect} from "react";
import s from './earth.module.css'
import m from './earthMedia.module.css'
import cn from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {getEarthObservation} from "../../reducers/earth";
import Preloader from "../../helpers/preloaders/preloader";
import ParametersPicker from "./parametersPicker/parametersPicker";
import {Redirect} from "react-router-dom";

const Earth = () => {

    const dispatch = useDispatch()
    const earthObs = useSelector(state => state.earth.earthObservation)
    const longitude = useSelector(state => state.earth.longitude)
    const latitude = useSelector(state => state.earth.latitude)
    const searchStart = useSelector(state => state.library.searchStart)
    const error = useSelector(state => state.errors.error)


    useEffect(()=>{
        dispatch(getEarthObservation(longitude, latitude))
    },[dispatch, longitude, latitude])

    if(searchStart) return <Redirect to='/nasaLibrary'/>

    return (
        <div className={s.earth}>
            <h2 className={cn(s.title, m.title)}>Earth Polychromatic Imaging Camera</h2>
            <ParametersPicker />


            {!earthObs && !error &&
            <Preloader/>}

            {earthObs && !error &&
            <div className={s.apodList}>
                <div className={cn(s.result, m.result)}>
                    <p className={s.earthParams}>ID: {earthObs.id}</p>
                    <p className={s.earthParams}>Date: {earthObs.date}</p>
                    <div className={s.imageHolder}>
                        <img className={s.image} src={earthObs.url} alt="earthObs"/>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Earth