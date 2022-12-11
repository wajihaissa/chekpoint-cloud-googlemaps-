import { Component } from 'react';

import {Map ,GoogleApiWrapper} from 'google-maps-react'
import './App.css';

class MapContainer extends  Component
{
  render(){
    return(
      
      
      <Map
      google={this.props.google}
      style={{width:"900px",height:"700px"}}
      zoom={10}
      initialCenter={{

        lat: 32.953371,
        lng:10.529297
      }}
      
      />  
    );
  }
}
export default GoogleApiWrapper ({
apiKey:"AIzaSyAoTbFqV0GyXjcoIyl1bw_IJX9lE759cqE"
})(MapContainer)


