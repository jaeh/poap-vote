import React from 'react';

import './styles.scss';
import shapeFrontSelected from '../../assets/images/shapeFrontSelected.png'
import shapeFront from '../../assets/images/shapeFront.png'

/**
 * Properties
 *
 * image: string => URL to the image
 * selected: bool => When true: color border + selection badge. Default to false
 * action: func => Action to be executed when option is selected
 * disabled: bool => When true: we should disable pointer-actions & block action. Default to false
 * outFocus: bool => When true we should add a grey scale over everything. Default to false
 */

const VoteOption = (props) => {
  const {image, action, disabled, selected, outFocus} = props
  return (
    <div className={`vote-option ${outFocus ? "outFocus-option": ''} ${disabled ? '' : 'vote-selectable'}`} onClick={() => action}>
      <img src={selected ? shapeFrontSelected : shapeFront} alt="Lobster" className="img-vote" style={{backgroundImage: `url(${image})`}}/>
    </div>
  )
  
};

export default VoteOption;
