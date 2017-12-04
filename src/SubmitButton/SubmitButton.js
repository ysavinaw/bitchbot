import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const SubmitButton = () => (
  <div>
    <br />
    <RaisedButton label="Submit" secondary={true} style={style} />
    <br />
    <br />

  </div>
);

export default SubmitButton;
