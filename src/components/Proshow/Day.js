import React from 'react';
import Card from './Card';

const Day = ({ data }) => {
    const renderCards = () => {
        return data.map((ele, index) => {
            return (
                <Card key={index} {...ele} />
            );
        });
    };

    return (
        <div className='flex justify-center items-center'>
            {renderCards()}
        </div>
    );
}
export default Day;