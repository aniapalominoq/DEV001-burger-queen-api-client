import React from 'react';
import "./Home.css";
const Home = () => {
    return (
        <div>
            <h1 className="form-title">Burguer Queen</h1>
            <h2 className="home-title">Quien eres?</h2>
            <div className="btn-control">
          <input className="button" type="submit" value="ADMIN" />
        </div>
        <div className="btn-control">
          <input className="button" type="submit" value="MESERO" />
        </div>
        </div>
    );
}

export default Home;
