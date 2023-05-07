import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#3f51b5', '#0dccea', '#6af8af', '#abbd81', '#849b87']}
      />
    );
}