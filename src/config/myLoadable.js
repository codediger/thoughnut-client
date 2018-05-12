import React from 'react'
import Loadable from 'react-loadable'; // imports the Loadable HOC

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  } else {
    return null;
  }
}


export default function MyLoadable(opts) {
  return Loadable(Object.assign({
    loading: Loading,
    delay: 500,
    timeout: 10000,
  }, opts));
};