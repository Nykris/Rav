import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';
// -->() Imported from Business.js!

class BusinessList extends React.Component {
  render() {

/* This is ready to return a series of <Business /> components, each with a
"business" attribute.  Slap on a "business" attribute and it generates as
many <Business />'s as needed, taking each value within your "businesses"
and stamping it onto the <Business /> as a "business" attribute. */

    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(businessEntry => {
            return <Business business={businessEntry} />
          })
        }
      </div>
    );
  }
}

// --> Exporting to App.js!
export default BusinessList;
