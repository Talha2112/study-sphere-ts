"use client"
import React from "react";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/store/store";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </div>
  );
};

export default MarketingLayout;
