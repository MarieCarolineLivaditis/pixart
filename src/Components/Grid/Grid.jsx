import PropTypes from 'prop-types';
import Row from '../Row/Row';
import './Grid.scss'

function Grid({ height, width, color, erase }) {
    let grid = [];
    let number = 1;
    for(let i = 0; i < height; i++) {
        grid.push(<Row
                    width={width}
                    key={number++}
                    color={color}
                    erase={erase}
                />);
    }

    return (
        <div className="Grid" onClick={(event) => {event.target.style.background = color}}>
            {grid}
        </div>
    )
}

Grid.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    color: PropTypes.string.isRequired,
    erase: PropTypes.string,
}

Grid.defaultPropTypes = {
    height: 0,
    width: 0,
    erase: '',
}

export default Grid;