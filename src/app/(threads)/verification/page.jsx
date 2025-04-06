"use client";
import React, { Suspense } from "react";
import Content from "./content";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
};

export default Page;
