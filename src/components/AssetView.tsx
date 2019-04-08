import { observer } from 'mobx-react';
import * as React from 'react';
import { Asset } from '../stores/AssetsStore';

interface IProps {
    asset: Asset;
}

@observer
export class AssetView extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const t = this.props.asset
        const action = (event: {}) => {
            t.inc();
        };

        return (
            <li onClick={action}>
                {t.name}:{t.description}:{t.budget}
            </li>
        );
    }
}