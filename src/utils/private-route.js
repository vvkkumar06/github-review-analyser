import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUserDetail } from './../services/reviews';
export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('token')? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}