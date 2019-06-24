import React, { Fragment } from "react";
import { useSignIn } from "../hooks/useSignIn";
import { useAuthenticated } from "../hooks/useAuthenticated";

interface Props {
  // children: React.ReactNode
}

export const Authenticated: React.SFC<Props> = ({ children }) => {
  const signIn = useSignIn();
  const userId = useAuthenticated();

  if (!userId) {
    return <button onClick={signIn}>GoogleLogin</button>
  }

  return <Fragment>{userId}{children}</Fragment>
}