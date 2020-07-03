import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Players from './components/Players';
import SelectedTeam from './components/SelectedTeam';
import "./styles/styles.scss"

const App = () => (
    <Provider store={store}>
        <main>
            <h1>Molino F.C</h1>
            <div className="content-players-cancha">
                <Players />
                <SelectedTeam />
            </div>
        </main>
    </Provider>
)

export default App;
