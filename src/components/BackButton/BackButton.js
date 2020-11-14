import React from 'react';
import './BackButton.css';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function BackButton() {
  let history = useHistory();
  const isLandingPage = useRouteMatch('/')?.isExact;
  return (
    <>
      {isLandingPage || <button onClick={() => history.goBack()}>Back</button>}
    </>
  );
}
