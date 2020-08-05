import React from "react";

export class Universe extends React.Component {
    constructor() {
        super();
        this.state = {
            intransitToPlanet: ["Attilus", "Dennix", "Mobius"],
            intransitToStarShip: ["Laura", "Tobin", "Robot"],
        };
    }

    moveToPlanet(name) {
        const arrivalArr = [...this.state.intransitToPlanet];
        arrivalArr.push(name);
        const departureArr = [...this.state.intransitToStarShip].filter((el) => {return el !== name});
        this.setState({
            intransitToPlanet: arrivalArr,
            intransitToStarShip: departureArr,
        })
    }

    moveToStarShip(name) {
        const arrivalArr = [...this.state.intransitToStarShip];
        arrivalArr.push(name);
        const departureArr = [...this.state.intransitToPlanet].filter((el) => {return el !== name});
        this.setState({
            intransitToStarShip: arrivalArr,
            intransitToPlanet: departureArr,
        })
    }

    render() {
        return (
            <div className="Universe">
                <h1>Universe</h1>
                <Starship
                    persons={this.state.intransitToStarShip}
                    moveToPlanet={this.moveToPlanet.bind(this)}
                />
                <Planet
                    persons={this.state.intransitToPlanet}
                    moveToStarShip={this.moveToStarShip.bind(this)}
                />
            </div>
        );
    }
}

class Starship extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="Starship">
                <h3>Starship Finderprise</h3>
                {this.props.persons.map((name) => {
                    return (
                        <button key={name} onClick={ () => {this.props.moveToPlanet(name)}}>
                            Transport {name}
                        </button>
                    );
                })}
            </div>
        );
    }
}

class Planet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Planet">
                <h3>Planet Earth</h3>
                {this.props.persons.map((name) => {
                    return (
                        <button key={name} onClick={ () => {this.props.moveToStarShip(name)}}>
                            Transport {name}
                        </button>
                    );
                })}
            </div>
        );
    }
}