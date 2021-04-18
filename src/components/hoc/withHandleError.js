import React from 'react';
import ShowError from '../ShowError';

const withHandleError = Comp => {
  return class extends React.Component {
    render() {
      const { error, ...restProps } = this.props;

      if (error) {
        return <ShowError />;
      }

      return <Comp {...restProps} />;
    }
  }
}

export default withHandleError;