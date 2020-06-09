import React, { Component } from "react";
import { connect } from "react-redux";

class Food extends Component {
  render() {
    const { foods } = this.props;
    const foodMenu = foods.length ? (
      foods.map((el) => {
        return (
          <div className="carte" key={el.id}>
            <h2>{el.name.toUpperCase()}</h2>
            <img src={el.photo} />
            <p>{el.compo.toUpperCase()}</p>
            <p>{el.prix} DNT</p>
          </div>
        );
      })
    ) : (
      <p>Le menu du jour n'est pas encore prêt</p>
    );
    return (
      <div>
        <h1>Menu du jour</h1>
        <div className="top">{foodMenu}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foods: state.foods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    foodReducer : () => dispatch({type: "PLATS_OK"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Food);
