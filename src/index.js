import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const AppHeader = () => {
    const margin = 40;
    const headerStyle = {
        color: 'red',
        marginLeft: `${margin}px`,
        marginBottom: `${margin}px`,
    }
    return(
        <h1
        //style={headerStyle}
        className="header"
        >
            Hello React
        </h1>
    );
}

const AppList = () => {
    const items = ['item 1', 'item 2', 'item 3'];
    return(
        <ul>
            {
                items.map(item => <li>{item}</li>)
            }
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
}

const App = () => {
    return(
        <React.Fragment>
            <AppHeader />
            <AppList />
            <AppHeader />
            <AppList />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
