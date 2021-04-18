import React from 'react';
import Loader from '../Loader';

const withLoading = Comp => {
  class WithLoadingClass extends React.Component {
    render() {
      const { loading, ...restProps } = this.props;

      if (loading) {
        return <Loader />;
      }

      return <Comp {...restProps} />;
    }
  }

  WithLoadingClass.displayName = `withLoading(${Comp.displayName || Comp.name})`;
  return WithLoadingClass;
}

export default withLoading;