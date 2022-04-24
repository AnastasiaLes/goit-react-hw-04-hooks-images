import { Loader, LoaderContainer } from './Loader.styled';

export const Spiner = () => {
    return (
        <LoaderContainer>
            <Loader size='20%'
            color='#3f51b5' />
            <h2>Loading...</h2>
        </LoaderContainer>
        );
}