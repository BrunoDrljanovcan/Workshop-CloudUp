import * as React  from 'react' ; 


export interface NavigationProps {
    navigationItems: NavigationItem[];
    selectedId: string;

    onSelectedChanged(selectedId);
}

export interface NavigationItem{
    name:string;
    id:string;

}

export interface NavigationItemProps{
    item: NavigationItem;
    onClicked(id: string);
    idSelected:boolean;
}

export class Navigation extends React.PureComponent<NavigationProps,never>{
    public render(): JSX.Element{
        return(
            <>
                {this.props.navigationItems && this.props.navigationItems.map((x,i) => (
                    <NavigationComponent
                    item={x}
                    onClicked={this.props.onSelectedChanged}
                    key = {i}
                    idSelected={x.id === this.props.selectedId}
                    />
                ))}
            </>
        )
    }
}

export class NavigationComponent extends React.PureComponent<NavigationItemProps,never>{

    private onClicked = () => {
        this.props.onClicked(this.props.item.id);
    }

    public render(): JSX.Element{
        return (
            <div onClick = {this.onClicked}>
                {this.props.item.name}
            </div>
        );
    }
}