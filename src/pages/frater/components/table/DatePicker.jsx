import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const CustomDatePicker = ({ selected, onChange, dateFormat }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat={dateFormat}
    />
  );
};

CustomDatePicker.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
};

export default CustomDatePicker;
