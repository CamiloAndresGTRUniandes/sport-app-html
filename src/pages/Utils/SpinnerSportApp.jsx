import React from "react";

export const SpinnerSportApp = () => {
  return (
    <div data-testid="spinner" className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
