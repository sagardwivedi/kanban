'use client';
import { Next13ProgressBar } from 'next13-progressbar';
import React from 'react';

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="4px"
        color="#6260c8"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};
