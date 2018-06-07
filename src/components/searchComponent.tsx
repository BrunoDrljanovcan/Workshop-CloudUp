import * as React from 'react';


export interface ISearchComponentProps {
    onSearch(value: string);
}

interface ISearchComponentsState {
    query: string;
}


export class SearchComponent extends React.Component<ISearchComponentProps, ISearchComponentsState>{

    constructor(props: ISearchComponentProps) {
        super(props);
        this.state = {
            query: ''
        };
    }
    private _onInputChange = (e: any) => {
        this.setState({
            query: e.target.value
        });
    }


    render() {
        return (
            <div>
                <input type="text" onChange={this._onInputChange} />
                <button onClick={() => this.props.onSearch(this.state.query)} > Search </button>
            </div>
        )
    }
}