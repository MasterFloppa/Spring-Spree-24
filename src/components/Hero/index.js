import React, { useRef, useState } from "react";
import rasengan from './Rasengan2.png';
import spreedate from './LOGOS-052.png';
import petalImager from './petal.png'
import './index.css';
import { useAuth } from "../../Context/AuthManager";
import Loader from "../Loader";
import { useEffect } from "react";

var mar = 10;
var imsz = 264;
const COLSZ = mar + imsz;

const Hero = () => {

	const [loading, setLoading] = useState(true);

	//loading effect
	useEffect(() => {
		console.time("im");
		Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => {
			img.onload = img.onerror = resolve;
		})))
			.then(() => {
				console.log('Images finished loading');
				setLoading(false);
			}).catch(() => {
				console.log('Some images failed to load');
			});
	}, []);

	const { user } = useAuth();

	let width = window.innerWidth - mar;
	let numCols = Math.max(3, Math.ceil(width / COLSZ));
	let colsz = width / numCols;
	document.querySelector(":root").style.setProperty('--imsz', colsz - mar + 'px');


	// const updateSpotlight = (e) => {
	//     let x = ((e.pageX / window.innerWidth) * 100).toFixed(0);
	//     let y = ((e.pageY / window.innerHeight) * 100).toFixed(0);

	//     if (ref) ref.style.background = `radial-gradient(circle at ${x}% ${y}%, ${size}`
	// };
	// function play(e) {
	//     let myAudio = document.querySelector("audio");
	//     myAudio.paused ? myAudio.play() : myAudio.pause();
	//     e.classList.toggle('pressed')
	//     let mystyle1=document.getElementsByClassName("myid1")[0];
	//     let mystyle2=document.getElementsByClassName("myid2")[0];
	//     console.log(mystyle1.classList);
	//     console.log(mystyle2.classList);
	//     mystyle1.classList.toggle('mystyle1');
	//     mystyle2.classList.toggle('mystyle2');
	//   }

	// const mouseMove = (e) => {
	//     if(traceback) clearInterval(traceback);
	//     traceback = 0;
	//     updateSpotlight(e);
	// }
	// const mouseLeave = (e) => {
	//     if (!ref) return;
	//     let s = ref.style.background;
	//     let x = parseInt(s.substring(26));
	//     let y = parseInt(s.substring(30));
	//     if(traceback) mouseMove(e);
	//     traceback = setInterval(() => {
	//         if(!ref) {
	//             clearInterval(traceback);
	//             return;
	//         }
	//         ref.style.background = `radial-gradient(circle at ${x}% ${y}%, ${size}`;
	//         x = x + (50 - x) / 100;
	//         y = y + (50 - y) / 100;
	//     }, 10)
	// }

	const PetalCanvas = () => {
		const canvasRef = useRef(null);
		const [ctx, setCtx] = useState(null);
		const [petalArray, setPetalArray] = useState([]);
		const [petalImg, setPetalImg] = useState(new Image());

		useEffect(() => {
			const canvas = canvasRef.current;
			if (!canvas) return; // Check if canvas exists

			const context = canvas.getContext('2d');
			setCtx(context);

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			const handleResize = () => {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			};

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}, []);

		useEffect(() => {
			const loadPetalImg = () => {
				const img = new Image();
				img.src = petalImager;
				img.onload = () => setPetalImg(img);
			};
			loadPetalImg();
		}, []);

		useEffect(() => {
			if (ctx && petalImg) {
				const TOTAL = 200;
				const newPetalArray = [];
				for (let i = 0; i < TOTAL; i++) {
					newPetalArray.push(new Petal(ctx, petalImg));
				}
				setPetalArray(newPetalArray);
			}
		}, [ctx, petalImg]);

		useEffect(() => {
			if (ctx && petalArray.length > 0) {
				const render = () => {
					if (canvasRef.current) {
						ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
						petalArray.forEach(petal => petal.animate());
						window.requestAnimationFrame(render);
					}
				};
				window.requestAnimationFrame(render);
			}
		}, [ctx, petalArray]);

		return <canvas ref={canvasRef}></canvas>;
	};

	class Petal {
		constructor(ctx, img) {
			this.x = Math.random() * ctx.canvas.width;
			this.y = (Math.random() * ctx.canvas.height * 2) - ctx.canvas.height;
			this.w = 25 + Math.random() * 15;
			this.h = 20 + Math.random() * 10;
			this.opacity = this.w / 40;
			this.flip = Math.random();
			this.xSpeed = 0.7 + Math.random() * 8;
			this.ySpeed = 0.7 + Math.random() * 4;
			this.flipSpeed = Math.random() * 0.03;
			this.ctx = ctx;
			this.img = img;
		}

		draw() {
			if (!this.ctx) return; // Check if ctx exists

			if (this.y > this.ctx.canvas.height || this.x > this.ctx.canvas.width) {
				this.x = -this.img.width;
				this.y = (Math.random() * this.ctx.canvas.height * 2) - this.ctx.canvas.height;
				this.xSpeed = 0.7 + Math.random() * 8;
				this.ySpeed = 0.7 + Math.random() * 4;
				this.flip = Math.random();
			}
			this.ctx.globalAlpha = this.opacity;
			this.ctx.drawImage(
				this.img,
				this.x,
				this.y,
				this.w * (0.6 + (Math.abs(Math.cos(this.flip)) / 3)),
				this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 5))
			);
		}

		animate() {
			this.x += this.xSpeed;
			this.y += this.ySpeed;
			this.flip += this.flipSpeed;
			this.draw();
		}
	}

	return (
		<div>
			{loading ? <Loader /> : ""}
			<div className=" relative flex overflow-hidden mx-auto w-full"
			// onMouseMove={(e) => {
			//     mouseMove(e);
			// }}
			// onMouseLeave={(e) => {
			//     mouseLeave(e);
			// }}
			>
				{/*[...Array(numCols).keys()].map((k) => {
                return <SlideTrack key={k} forward={k % 2} images={images[k % images.length]} />
            })*/}
				<PetalCanvas />

				<div
					className="absolute h-full w-full top-0 left-0 spotlight opacity-95"	>
				</div>

				<div className='heading1 flex flex-col justify-center items-center' style={{ 'background': 'transparent' }}>
					<div className="spree-title" style={{ 'padding': '0 25px' }}>
						<img src={spreedate} alt="Spree dates" />
					</div>
					<div>
						<img src={rasengan} alt="Rasengan" />
					</div>
					<h3>where the culture resonates</h3>
					<div className="main flex justify-center">
						<button className="btn35">

							<span><a href={user ? "/register" : "/auth"}>Register</a></span>

						</button>
					</div>

				</div>

				<div className="eat"></div>
			</div>
		</div>
	)
}

export default Hero;