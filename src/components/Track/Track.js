import React from 'react';
import './Track.css'

class Track extends React.Component {
  renderAction(isRemoval) {
    if (isRemoval) {
      return <a className='Track-action'>+</a>;
    } else {
      return <a className='Track-action'>-</a>;
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Welcome To My House</h3>
          <p>Flo Rida | The Album</p>
        </div>
        <a className="Track-action">+ or - will go here</a>
      </div>
    );
  }
}

export default Track;
