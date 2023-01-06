import PropTypes from 'prop-types';

import Field from '../Field/Field';
import Button from '../Button/Button';
import './GridSizeForm.scss';

function GridSizeForm({
  inputWidthValue,
  inputHeightValue,
  width,
  height,
  gridSize,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if(width === 0 || height === 0) {
        return;
    };
    gridSize();
  };

  return (
        <div>
          <form autoComplete="off" className="Grid-size-form" onSubmit={handleSubmit}>
            <Field
              name="width"
              type="width"
              placeholder="Largeur de la grille"
              onChange={inputWidthValue}
              value={width}
            />
            <Field
              name="height"
              type="height"
              placeholder="Hauteur de la grille"
              onChange={inputHeightValue}
              value={height}
            />
            <Button
              type="submit"
              className="Grid-size-form-button"
              value="Valider"
            />
          </form>
        </div>
  );
}

GridSizeForm.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  inputHeightValue: PropTypes.func.isRequired,
  inputWidthValue: PropTypes.func.isRequired,
  gridSize: PropTypes.func.isRequired,
};

GridSizeForm.defaultProps = {
    width: 0,
    height: 0,
}

export default GridSizeForm;