"use client"

import LoginComp from "@/components/LoginComp";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const LoginPage = () => {
  return (
    <>
      <Provider store={store}>
      <LoginComp />
      </Provider>
        
      
    </>
  );
};

export default LoginPage;