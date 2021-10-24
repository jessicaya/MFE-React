import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {

    const {onParentNavigate} = mount(ref.current, {onNavigate: ({pathname: nextPathName})=>{
      console.log(`Marketing App: ${nextPathName} current: ${history.location.pathname}`);
      const pathname = history.location.pathname;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    }, initialPath: history.location.pathname});
    console.log('Parent mount finished')
    history.listen(onParentNavigate);
  },[]);

  return <div ref={ref} />;
};
