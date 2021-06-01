import React from 'react';
import {Card} from './Card'
// import './card-list.style.css'

export const CardList = ({results}) => {
    console.log('Card result - ',results)
    return (
        results ? 
        <section className="grid">
            { results.map((result,index) => {
                return index < 4 ? <Card key={result.title} value={result}/> : null 
            })}
        </section>
        : null
    )
};