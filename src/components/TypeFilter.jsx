import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import PropTypes from 'prop-types';

const ButtonValues = {
  All: 'All',
  Employee: 'Employee',
  Employer: 'Employer',
};

console.log('import.meta.env.VITE_ABOBUS_ENV', import.meta.env.VITE_ABOBUS_ENV);
console.log('import.meta.env.ABOBUS_ENV', import.meta.env.ABOBUS_ENV);
console.log('import.meta.env.VITE_API_ENDPOINT', import.meta.env.VITE_API_ENDPOINT);
console.log('import.meta.env.API_ENDPOINT', import.meta.env.API_ENDPOINT);
console.log('import.meta.env.VITE_API_URL', import.meta.env.VITE_API_URL);
console.log('import.meta.env.API_URL', import.meta.env.API_URL);
console.log('process.env.VITE_ABOBUS_ENV', process.env.VITE_ABOBUS_ENV);
console.log('process.env.ABOBUS_ENV', process.env.ABOBUS_ENV);
console.log('process.env.VITE_API_ENDPOINT', process.env.VITE_API_ENDPOINT);
console.log('process.env.API_ENDPOINT', process.env.API_ENDPOINT);
console.log('process.env.VITE_API_URL', process.env.VITE_API_URL);
console.log('process.env.API_URL', process.env.API_URL);

function TypeFilter({ handleEmployeeType, type }) {
  return (
    <FormControl sx={{ padding: '16px' }}>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Type
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={type}
        onChange={handleEmployeeType}
      >
        <FormControlLabel value={ButtonValues.All} control={<Radio />} label="All" />
        <FormControlLabel value={ButtonValues.Employee} control={<Radio />} label="Employee" />
        <FormControlLabel value={ButtonValues.Employer} control={<Radio />} label="Employer" />
      </RadioGroup>
      <h1>{import.meta.env.VITE_ABOBUS_ENV}</h1>
    </FormControl>
  );
}

TypeFilter.propTypes = {
  handleEmployeeType: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default TypeFilter;
