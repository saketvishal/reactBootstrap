import React, {
  Component
}
from 'react';
class Template extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      CitiName
    } = this.props;
    return ( < div > < h1 > Hello Vishal < /h1> < /div > )
  }
}
export default Template;
