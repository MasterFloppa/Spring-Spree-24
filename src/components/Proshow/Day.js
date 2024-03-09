import React from 'react';
import Card from './Card';

const Day = ({ data }) => {

    const renderCards = () => {
        return data.map(ele => {
            return <Card link1={ele.link1} link2={ele.link2} link3={ele.link3} link4={ele.link4} />
        });
    }
    return (
        <div className='flex flex-col md:flex-row justify-center items-center my-12 '>
            {renderCards()}
        </div>
    )
}
export default Day;