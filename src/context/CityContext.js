import React from "react";
export const CityContext = React.createContext();
export class CityProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
    };
    this.setCity = this.setCity.bind(this);
	}
	setCity(id, name) {
    this.setState({
        id: id,
        name: name
    });
  }
	render() {
    return (
    	<CityContext.Provider
        value={{
          id: this.state.id,
          name: this.state.name,
          setCity: this.setCity,
          setLocation: this.setLocation
        }}
    	>
        {this.props.children}
    	</CityContext.Provider>
    );
	}
}
  