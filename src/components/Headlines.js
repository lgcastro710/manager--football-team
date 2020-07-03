import React from 'react';
import { connect } from 'react-redux';
import cancha from '../cancha.svg';
const Headlines = ({ headlines, removeHeadline }) => {
    return (
        <section>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    headlines.map(player => (
                        <article className="titular" key={player.id}>
                            <div>
                                <img src={player.foto} alt={player.nombre} />
                                <button onClick={() => removeHeadline(player)}>X</button>
                            </div>
                            <p>{player.nombre}</p>
                        </article>
                    ))
                }
                <img src={cancha} alt="Cancha futbol" />
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    headlines: state.headlines,
});
const mapDispatchToProps = dispatch => ({
    removeHeadline(player) {
        dispatch({
            type: "REMOVE_HEADLINE",
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Headlines);