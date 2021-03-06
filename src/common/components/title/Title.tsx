import React from 'react';
import Pulse from 'react-reveal/Pulse';
import s from './Title.module.scss';

type TitleType = {
    title1: string
    title2: string
}

export const Title: React.FC<TitleType> = ({title1, title2}) => {
    return (
        <div className={s.title}>
            <Pulse>
                <h3>{title1}</h3>
                <h2>{title2}</h2>
            </Pulse>
        </div>
    );
}