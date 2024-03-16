import './index.css';

import rangoli_outer from './rangoli-outer.png';
import rangoli_inner from './rangoli-inner.png';

export const Loader = () => {
    return (
        <div className="loader">
            <img className="spin" src={rangoli_inner} alt="Circular Image1" />
            <img className="spin2" src={rangoli_outer} alt="Circular Image2" />
        </div>
    )
}

export default Loader;

