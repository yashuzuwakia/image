import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = {
        images: []
    };
    onSearchSubmit = async (abc) => {

        const response = await unsplash.get('/search/photos', {
            params: { query: abc }
        });


        this.setState({ images: response.data.results });

    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <h1>IMAGE SEARCH</h1>
                <SearchBar onSubmita={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }

}

export default App;