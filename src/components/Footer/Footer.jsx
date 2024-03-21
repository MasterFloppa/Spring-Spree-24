import React from "react";
import LOGO from "./LOGOS-04.png";
import "./Footer.css";

export default function Footer() {
	return (
		<div>
			<footer className=" footer-section w-full h-auto bg-pink relative pt-2rounded-4xl md:h-[500px] lg:h-[480px]">
				<div className=" w-full h-auto bg-cover bg-center ">
					<div className=" w-full h-auto ">
						<div className="w-full h-full flex justify-center items-center">
							<img
								src={LOGO}
								className="w-96 h-auto flex items-center justify-center relative opacity-10"
								alt="logo"
							/>
							<div className="w-auto h-auto flex flex-col absolute heading absolute top-0">
								<div className="text flex-col h-full justify-center items-center mb-6">
									<h3 className=" footer_title flex h-10 justify-center mt-4 font-[800] font-aftersick  xsm:text-center  md:text-left text-purple">
										Rasengan
									</h3>
									<h3 className="footer-tag mb-2 italic font-ojuju font-semibold text-purple xsm:text-center md:text-left flex justify-center">
										Unwind, recharge and revel is the tagline we used
									</h3>
									<h3 className="text-center footer-note  mx-4  font-ojuju text-purple font-[300] lg:mx-20 ">
										Namaste and a very warm welcome to SpringSpree - our vibrant
										and colorful cultural fest celebrating the rich artistic
										traditions of our community!
									</h3>
								</div>
								<div className="flex-col justify-center mt-6 items-center sm:mt-2 xsm:mt-2">
									<div className="flex-col justify-center items-center mb-8">
										<span className="flex justify-center font-futura items-center block uppercase text-purple font-semibold my-2 footer-venue">
											Venue
										</span>
										<div>
											<ul className="flex-col justify-center items-center text-center list-unstyled xsm:text-center sm:text-left mx-2">
												<li className="flex footer-clg-name font-futura justify-center text-center tracking-wide text-purple font-medium ">
													National Institute of Technology Warangal, Hanamkonda
													Road, 506004
												</li>
												<li className=" flex font-futura justify-center text-purple font-medium">
													springspree@nitw.ac.in
												</li>
											</ul>
										</div>
									</div>

									{/*---------------------------------RazorPay links---------------------------------*/}
									{/* <div className="flex justify-center items-center mb-8">
										<div id="horz-list">
											<ul>
												<li className="rounded-full overflow-hidden">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/privacy"
														className="block font-futura py-2 px-4"
													>
														Privacy Policy
													</a>
												</li>
												<li className="rounded-full overflow-hiddenmt-2">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/terms"
														className="block font-futura py-2 px-4"
													>
														Terms & Conditions
													</a>
												</li>
												<li className="rounded-full overflow-hiddenmt-2">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/refund"
														className="block font-futura py-2 px-4"
													>
														Cancellation & Refund
													</a>
												</li>
												<li className="rounded-full overflow-hiddenmt-2">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/shipping"
														className="block font-futura py-2 px-4"
													>
														Shipping & Delivery
													</a>
												</li>
												<li className="rounded-full overflow-hiddenmt-2">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/contact_us"
														className="block font-futura py-2 px-4"
													>
														Contact Us
													</a>
												</li>
											</ul>
										</div>
									</div> */}

									<hr className="w-full my-2 border-black"></hr>
									<div className="flex justify-center items-center">
										<div className="text-sm text-purple mx-1 font-futura font-semibold py-1 ">
											All rights reserved ©{" "}
											<span id="get-current-year">2024</span>
											<span className="text-purple font-futura hover:text-gray-800">
												{" "}
												SpringSpree'24 Dev Team{" "}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
