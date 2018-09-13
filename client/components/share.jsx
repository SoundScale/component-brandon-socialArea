import React from 'react';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 70,
      height: 25,
      bottom: 30,
      left: 190,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
    };
    return (
      <div>
        <button type="button" style={styling}>Share</button>
      </div>
    );
  }
}

export default Share;