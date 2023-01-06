import PropTypes from 'prop-types';
import Pixel from '../Pixel/Pixel';

import './Row.scss';

function Row({ width }) {
    let row = [];
    let number = 1;
    for (let i = 0; i < width; i++){
       row.push(<Pixel key={number++} />)
    }

    return(
        <div className="Row">{row}</div>
    )
}

Row.propTypes = {
    width: PropTypes.number.isRequired,
}

export default Row;