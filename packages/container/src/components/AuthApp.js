import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        console.log(
          `Auth App: ${nextPathName} current: ${history.location.pathname}`
        );
        const pathname = history.location.pathname;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      initialPath: history.location.pathname,
      onSignIn,
    });
    console.log("Parent mount finished");
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
