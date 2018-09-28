import React from 'react';
import PropTypes from 'prop-types';
import { LabelContainer } from './styles';

const Label = ({ Icon, Text }) => (
  <LabelContainer>
    <img alt="icon" src={Icon} width="20px" />
    <span>{Text}</span>
  </LabelContainer>
);

Label.propTypes = {
  Text: PropTypes.number,
  Icon: PropTypes.string,
};

export default Label;
