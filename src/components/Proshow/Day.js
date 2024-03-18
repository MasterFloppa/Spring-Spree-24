import React from 'react';
import Card from './Card';

const Day = ({ data }) => {

    const renderCards = () => {
        return data.map((ele, index) => {
            {/*Destructure the properties from the 'ele' object*/ }
            const { link1, link2, link3, link4 } = ele;
            return (
                <Card
                    key={index}
                    link1={link1}
                    link2={link2}
                    link3={link3}
                    link4={link4}
                />
            );
        });
    }
    return (
        <div className='flex flex-col md:flex-row justify-center items-center my-12 '>
            {renderCards()}
        </div>
    )
}
export default Day;