import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../Action/Actions";

const SignUp = ({ addPerson }) => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  return (
    <div className="Sin">
      <div className="Siin">
        <h1>Connexion</h1>
        <button className="btn">Inscription</button>
        <button className="btn">Authentification</button>
        <form>
          <span>Nom d'utilisateur</span>
          <input
            type="text"
            placeholder="Entrer le nom d'utilisateur"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>Mot de passe</span>
          <input
            type="password"
            placeholder="Entrer le mot de passe"
            minlength="8"
            required
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          />
          <button
            onClick={() =>
              addPerson({
                id: 0,
                name: userName,
                pass: userPass,
              })
            }
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addPerson: (user) => dispatch(addUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
