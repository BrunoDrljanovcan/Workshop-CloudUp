import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import Student, { IStudentProps } from './demo/student';
import Lecture from './demo/lecture';
import { SearchComponent } from './components/searchComponent';
import { HistoryComponent, HistoryItem } from './components/historyComponent';
import { Navigation } from './components/navigation';
import {NavigationItem}  from './components/navigation';


interface IStates {
    giph?: string;
    selectedNavigationItem: string;
    historyItems: HistoryItem[];

}

interface IProps {
    
}


class Index extends React.Component<IProps, IStates> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            giph: '',
            selectedNavigationItem: 'search',
            historyItems : []
        }
    }

    public renderImage(): JSX.Element {
        if (!this.state.giph) {
            return null;
        }
        return (
            <div>
                <img src={this.state.giph} />
                <button onClick={this._onSave}> Saveee</button>
            </div>
        );
    }

    private searchGiphy(query?: string) {
        getRandomGiphy(query).then(gifSource => {
            this.setState({
                giph: gifSource
            })
        });
    }

    private navigationItems: NavigationItem[] = [
        {
            name: 'search',
            id: 'search'
        },
        {
            name:'history',
            id: 'history'
        }
    ]

    private _onSave = () => {
        console.log(2);
        const historyItem : HistoryItem = {
            url: this.state.giph           
        }
        const items = [...this.state.historyItems, historyItem];

        this.setState({
            historyItems: items
        })
    }

    private onNavigationSelected = (selectredId: string) => {
        this.setState({
            selectedNavigationItem : selectredId
        })
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
                <Navigation
                navigationItems = {this.navigationItems}
                onSelectedChanged = {this.onNavigationSelected}
                selectedId = {this.state.selectedNavigationItem}
                />
                
                {this.state.selectedNavigationItem === 'search' &&
                <>
                     <SearchComponent
                     onSearch={this._onSearch}
                     />
                     {this.renderImage()}
                </>
                }
                {
                    this.state.selectedNavigationItem === 'history' &&
                    <HistoryComponent
                    HistoryItems={this.state.historyItems}
                     />
                }                                          
                
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
