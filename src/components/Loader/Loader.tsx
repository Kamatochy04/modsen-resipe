import { Spinner } from '.';

type Props = {
    className?: string;
};

function Loader({ className }: Props) {
    return <Spinner className={className} />;
}

export default Loader;
