import React from 'react';
import { PollOption } from '../../types/Poll';

interface VoteProps {
  options: PollOption[];
  onVote: (optionId: number) => void;
  viewWinner: boolean;
}

const Vote: React.FC<VoteProps> = ({ options, onVote, viewWinner }) => {
  return (
    <div className="vote-container w-40 h-50">
      <div key={1} data-testid={`option-1`} className="card mr-10 ml-10 w-100">
        <section className="layout-row align-items-center justify-content-center mr-10 ml-10 pr-10 pl-10">
          <h3 data-testid={`choice-1}`}>{"Choice 1"}</h3>
        </section>
        <section className="layout-row align-items-center justify-content-center mr-10 ml-10 mb-10 pr-10 pl-10">
          <button onClick={() => {}} disabled={false} data-testid={`vote-button-1`}>
            Vote
          </button>
        </section>
      </div>
      <div key={2} data-testid={`option-2`} className="card mr-10 ml-10 w-100">
        <section className="layout-row align-items-center justify-content-center mr-10 ml-10 pr-10 pl-10">
          <h3 data-testid={`choice-2`}>{"Choice 2"}</h3>
        </section>
        <section className="layout-row align-items-center justify-content-center mr-10 ml-10 mb-10 pr-10 pl-10">
          <button onClick={() => {}} disabled={false}data-testid={`vote-button-2`} >
            Vote
          </button>
        </section>
      </div>
    </div>
  );
};

export default Vote;
