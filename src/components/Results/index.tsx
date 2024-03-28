import React from 'react';
import { Poll } from '../../types/Poll';

interface ResultsProps {
  poll: Poll;
  viewWinner: boolean;
  setViewWinner: (viewWinner: boolean) => void;
  totalVotes: number;
}

const Results: React.FC<ResultsProps> = ({ poll, viewWinner, setViewWinner, totalVotes }) => {
  return (
    <>
      <p data-testid="result">{"Add Result Here"}</p>
      <section className="layout-row align-items-center justify-content-center mr-10 ml-10 pr-10 pl-10">
        <button data-testid="winner-button" onClick={() => {}} disabled={false}>
          View Winner
        </button>
      </section>
    </>
  );
};

export default Results;
