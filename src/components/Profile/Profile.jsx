import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/AuthManager';
import QR from './QR';
import Loader from '../Loader';

const Profile = () => {
    const { user } = useAuth();
    const userObj = JSON.parse(user);
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${userObj.user.email}`, { method: "GET" })
            if (response.status !== 200) return;

            const { details } = await response.json();
            setDetails(details);
            setLoading(false);
            // console.log(details);
        }
        fetchDetails();
    }, [userObj.user.email]);

    // console.log(details);

    const payNow = () => {
        const val = details.paidForAccomodationDay0 && details.paidForAccomodationDay1 && details.paidForAccomodationDay2 && details.paidForAccomodationDay3 && details.paidForRegDay1 && details.paidForRegDay2 && details.paidForRegDay3 && details.paidForProshow1 && details.paidForProshow2 && details.paidForProshow3;
        return val;
    }
    return (
        <>
            {loading ? <Loader /> : ""}
            <div className='w-full min-h-screen overflow-y-auto overflow-x-hidden bg-black text-black mx-auto pt-[80px] pb-[50px] px-4 sm:px-4 md:px-12 lg:px-16'>
                <div className="bg-white p-3 shadow-md rounded-lg md:p-6">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>

                    </div>
                    <div className="mb-4">
                        <img className='max-w-[150px] w-full h-auto rounded-full mx-auto' src={userObj.user.profilePicture} alt='profile_pic' />
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">First Name</div>
                                <div className="py-2">{userObj.user.firstName}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">Last Name</div>
                                <div className="py-2">{userObj.user.lastName}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">Gender</div>
                                <div className="py-2">{details?.gender ? details?.gender : "-"}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">Contact No.</div>
                                <div className="py-2">{details?.mobile ? details?.mobile : "-"}</div>
                            </div>

                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">Email</div>
                                <div className="py-2">
                                    <div className="text-blue-800">{userObj.user.email}</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">College</div>
                                <div className="py-2">{details?.college ? details?.college : "-"}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4"></div>

                <div className="bg-white p-3 shadow-sm rounded-lg md:p-6">
                    {/* for Reg & Accomodation */}
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span clas="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">Registration & Accomodation Details</span>
                    </div>
                    <div className="grid grid-cols-1  md:grid-cols-2">
                        <div>
                            <div className='font-bold my-2'>Registration</div>
                            {!(details?.paidForRegDay1 || details?.paidForRegDay2 || details?.paidForRegDay3) ? <><div className="">Fee : <button className="px-6 py-2 bg-[#F7CA17] rounded-md font-bold" disabled={true}>₹350/-</button></div>
                                <p className="text-md text-black"><span className="text-[#BA1717]">*</span>This fee is compulsory to register for other events in the spree.</p>
                            </> :
                                <div className="text-black text-md md:mr-4">✅Congratulations, You are registered for the SpringSpree.<br /> Now, You can register for other events like Proshows, Competitions and Club Events etc whenever they are posted.</div>
                            }
                        </div>
                        <div>
                            <div className='font-bold my-2'>Food & Accomodation</div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">April 6<sup>th</sup> : ₹250 - {details?.paidForAccomodationDay0 ? "✅Paid" : "❌Not Paid"}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">April 7<sup>th</sup> : ₹250 - {details?.paidForAccomodationDay1 ? "✅Paid" : "❌Not Paid"}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">April 8<sup>th</sup> : ₹250 - {details?.paidForAccomodationDay2 ? "✅Paid" : "❌Not Paid"}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">April 9<sup>th</sup> : ₹250 - {details?.paidForAccomodationDay3 ? "✅Paid" : "❌Not Paid"}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div>
                            <div className='font-bold my-2'>Pro Shows:</div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">April 7<sup>th</sup> (Anurag Halder + Saketh) : ₹500 - {details?.paidForProshow1 ? "✅Paid" : "❌Not Paid"}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">April 8<sup>th</sup> (Costheta Band + Aseem Sharma (Acoustic Live) + DJ Vanmoon) : ₹500 - {details?.paidForProshow2 ? "✅Paid" : "❌Not Paid"}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">April 9<sup>th</sup> (Mohan Sisters Live + DJ Swattrex) : ₹700 - {details?.paidForProshow3 ? "✅Paid" : "❌Not Paid"}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center mt-8'>
                        {payNow() ? '' : <a href="/register" class="shadow-lg w-32 px-5 py-2.5 relative text-center rounded group font-medium text-black font-medium inline-block bg-[rgb(247,202,23)]">
                            Pay Now
                        </a>}
                    </div>
                </div>
                {(details.paidForRegDay1 || details.paidForRegDay2 || details.paidForRegDay3) &&
                    userObj.user.email.split('@')[1] !== 'student.nitw.ac.in' ? <QR id={"https://springspree-checkin.nitw.in/checkin/" + details?.uniqueId} /> : null}
            </div>
        </>
    )
}
export default Profile