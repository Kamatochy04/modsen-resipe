import { Component, ReactNode } from 'react';

import { Errorpage } from '@/pages';

type State = {
    hasError: boolean;
};

type Props = {
    children?: ReactNode;
};

export default class ErrorBoundary extends Component<Props, State> {
    public state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public render() {
        if (this.state.hasError) {
            return <Errorpage />;
        }

        return this.props.children;
    }
}
