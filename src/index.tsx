import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import Lecture from './demo/lecture';
import { SearchComponent } from './components/searchComponent';

interface IStates {
    giph?: string;
}

interface IProps {

}

class Index extends React.Component<IProps, IStates> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            giph: ''
        }
    }

    public renderImage(): JSX.Element {
        if (!this.state.giph) {
            return <p>Noimage</p>;
        }
        return (
            <div>
                <img src={this.state.giph} />
            </div>
        );
    }

    private searchGiphy(query?: string) {
        console.log(query);
        getRandomGiphy(query).then(gifSource => {
            this.setState({
                giph: gifSource
            })
        });
    }

    private _onSearch = (query: string) => {
        this.searchGiphy(query);
    }


    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <SearchComponent
                    onSearch={this._onSearch}
                />
                {this.renderImage()}

            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
