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

    private _onButtonClicked = () => {
        this.props.onSearch(this.state.query);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this._onInputChange} /> <br/>
                <button onClick={this._onButtonClicked} > Search </button>
            </div>
        )
    }
}
