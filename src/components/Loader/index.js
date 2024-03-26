import './index.css';

import rangoli_outer from './rangoli-outer.png';
import rangoli_inner from './rangoli-inner.png';

export const Loader = ({ type }) => {
    return (
        <div className="loader">
            {type===true ? (
                <>
                    <img className="spin2-5" src={rangoli_outer} alt="Circular Image2" />
                    <img className="spin1-5" src={rangoli_inner} alt="Circular Image1" />
                </>
            ) : (
                <>
                    <img className="spin" src={rangoli_inner} alt="Circular Image1" />
                    <img className="spin2" src={rangoli_outer} alt="Circular Image2" />
                </>
            )}
        </div>
    )
}

export default Loader;


