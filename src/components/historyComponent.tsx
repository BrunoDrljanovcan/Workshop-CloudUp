import * as React from 'react';

export interface IHistoryComponentProps {
    HistoryItems: HistoryItem[];
}

interface IHistoryComponentStates {

}

export interface HistoryItem {
    url: string;
    input?: string;
}

export class HistoryComponent extends React.PureComponent<IHistoryComponentProps, never>{
    public render(): JSX.Element {
        return (
            <div>
                {this.props.HistoryItems && this.props.HistoryItems.map((x, i) => (
                    <div className="" key={i} >
                        <img src={x.url} />
                        <span>{x.input}</span>
                    </div>
                )
                )}
            </div>
        );
    }
}
