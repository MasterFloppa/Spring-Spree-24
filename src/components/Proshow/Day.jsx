import React from 'react';
import Card from './Card_1';

const Day = ({ data }) => {
    const renderCards = () => {
        return data.map((ele, index) => {
            return (
                <Card key={index} {...ele} />
            );
        });
    };

    return (
        <div className='flex flex-wrap justify-center gap-4 items-center mb-4'>
            {renderCards()}
        </div>
    );
}
export default Day;