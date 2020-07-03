import React from 'react';
import { connect } from 'react-redux';

const Players = ({ players, addPlayer, addAlternate }) => {
    return (
        <section class="list-players">
            <h2>Jugadores</h2>
            <div className="contenedor-jugadores">
                {
                    players.map(player => (
                        <article className="jugador" key={player.id}>
                            <img src={player.foto} alt={player.nombre} />
                            <h3>{player.nombre}</h3>
                            <div>
                                <button onClick={() => addPlayer(player)}>Titular</button>
                                <button onClick={() => addAlternate(player)}>Suplente</button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
};

const mapStateToProps = state => ({
    players: state.players,
});
const mapDispatchToProps = dispatch => ({
    addPlayer(player) {
        dispatch({
            type: "ADD_HEADLINE",
            player
        })
    },
    addAlternate(player) {
        dispatch({
            type: "ADD_ALTERNATE",
            player
        })
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);