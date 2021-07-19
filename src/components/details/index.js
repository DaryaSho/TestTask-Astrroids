
import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HOME } from '../../pathСonstants';
import { Container, Text, Title, Diameter } from './styled';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function Details(props) {

    const { asteroid: {name, nasa_jpl_url, absolute_magnitude_h, estimated_diameter}} = props;
    const [unit, setUnit] = React.useState('meters');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
      setUnit(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

     const renderSelect = () =>
    ( <Select
      labelId="Estimated diameter"
      id="estimated-diameter"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      value={unit}
      onChange={handleChange}
    >
          <MenuItem value="meters">
            
          </MenuItem>
          <MenuItem value="meters">Meters</MenuItem>
          <MenuItem value="kilometers">Kilometers</MenuItem>
          <MenuItem value="miles">Miles</MenuItem>
          <MenuItem value="feet">Feet</MenuItem>
    </Select>
      ) 
      
      
      return (<Container>
      <Link to={HOME}>
        <Text>Go Home</Text>
      </Link>
        <Title>Name: {name}</Title>
        <Text>URL: <a href={nasa_jpl_url} target="_blank">{nasa_jpl_url}</a></Text>
        <Text>Absolute magnitude: {absolute_magnitude_h}</Text>
        <Diameter> Estimated diameter: min: {estimated_diameter[unit].estimated_diameter_min.toFixed(2)} - max{estimated_diameter[unit].estimated_diameter_max.toFixed(2)} {renderSelect()}</Diameter>
        
        
      </Container>);
    
}

Details.propTypes = {
  asteroid: PropTypes.object
  };
export default Details;