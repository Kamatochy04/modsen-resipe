import { ErrorCode, ErrorContainer, ErrorLabel, ErrorMessage, HomeButton } from '.';

function Errorpage() {
    return (
        <ErrorContainer>
            <ErrorCode>404</ErrorCode>
            <ErrorLabel>OOps! Page Not Found</ErrorLabel>
            <ErrorMessage>This page doesn't exist or was removed! We suggest you back to home</ErrorMessage>
            <HomeButton>Back to homepage</HomeButton>
        </ErrorContainer>
    );
}

export default Errorpage;
