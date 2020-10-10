import * as React from 'react';

export const navigationRef = React.createRef();

export const isReadyRef = React.createRef();

export const navigate = (name, params) => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const navigateBack = () => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  }
};
