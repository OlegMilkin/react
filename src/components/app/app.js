import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <PostStatusFilter/>
            <div className="search-panel d-flex">
                <SearchPanel/>
            </div>
        </div>

    )
}

export default App;