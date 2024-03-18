import React,{useState, useEffect} from 'react'
import SponsorsCard from './SponsorsCard'
import "./Sponsors.css"
function Sponsors() {
	// const [sponsors, setSponsors] = useState([]);
    // useEffect(() => {
    //     async function fetchSponsors() {
    //         try {
    //             const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sponsor/getAll`);
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setSponsors(data); // Assuming data is an array of sponsor objects
    //             } else {
    //                 console.error('Failed to fetch sponsors');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching sponsors:', error);
    //         }
    //     }
    //     fetchSponsors();
    // }, []);

	return (
		// <div className='w-full h-auto bg-purple flex flex-col'>
        //     {/* Render sponsors dynamically */}
        //     {sponsors.map((sponsor, index) => (
        //         <div key={index} className='spons flex-col justify-center items-center mb-10'>
        //             <h1 className='flex justify-center text-pink text-4xl mb-10 mt-20'>{sponsor.category}</h1>
        //             <div className='spons_line'>
        //                 {/* Render SponsorsCard for each sponsor */}
        //                 {sponsor.items.map((item, itemIndex) => (
        //                     <div key={itemIndex} className='flex justify-center'>
        //                         <SponsorsCard image={item.image} text={item.text} />
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     ))}
        // </div>
		<div className='w-full h-auto bg-purple flex flex-col'>
			<div className='w-full h-auto flex-col justify-center items-center mt-32'>
				<div className='flex justify-center text-pink text-4xl mb-10 font-futura'>Title Sponsor</div>
				<div className='flex justify-center'><SponsorsCard /></div>
			</div>
			<div className='spons flex-col justify-center items-center mb-10'>
				<h1 className='flex justify-center text-pink text-4xl mb-10 mt-20 font-futura'>Media Sponsor</h1>
				<div className='spons_line'>
					<div className='flex justify-center'><SponsorsCard /></div>
					<div className='flex justify-center'><SponsorsCard /></div>
					<div className='flex justify-center'><SponsorsCard /></div>
				</div>
			</div>
		</div>
	)
}

export default Sponsors