import React from 'react';
import { connect } from 'react-redux';

const Alternates = ({ alternates, removeAlternate }) => {
    return (
        <section>
            <h2>Suplentes</h2>
            <div className="cancha-suplentes">
                {
                    alternates.map(player => (
                        <article className="suplente" key={player.id}>
                            <div className="suplente-align">
                                <img src={player.foto} alt={player.nombre} />
                                <button onClick={() => removeAlternate(player)}>X</button>
                                <p>{player.nombre}</p>
                            </div>

                        </article>
                    ))
                }
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    alternates: state.alternates,
});
const mapDispatchToProps = dispatch => ({
    removeAlternate(player) {
        dispatch({
            type: "REMOVE_ALTERNATE",
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Alternates);