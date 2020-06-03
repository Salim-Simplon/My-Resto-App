import React, { Component } from "react";
import { connect } from "react-redux";

class Food extends Component {
  render() {
    const { foods } = this.props;
    const foodMenu = foods.length ? (
      foods.map((el) => {
        return (
          <div key={el.id}>
            <h2>{el.name}</h2>
            <img src={el.photo} />
            <p>{el.compo}</p>
            <p>{el.prix} DNT</p>
          </div>
        );
      })
    ) : (
      <p>Le menu du jour n'est pas encore pret</p>
    );
    return (
      <div>
        <h1>Menu du jour</h1>
        {foodMenu}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foods: state.foods,
  };
};

export default connect(mapStateToProps)(Food);
