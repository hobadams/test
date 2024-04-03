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
      {options.map((option) => (
        <VoteButton key={option.id} text={option.text} id={option.id} onClick={() => onVote(option.id)} disabled={viewWinner} />
      ))}
    </div>
  );
};

interface VoteButtonProps {
  text: string;
  id: number;
  onClick: () => void;
  disabled?: boolean;
}

const VoteButton = ({ text, id, onClick, disabled = false }: VoteButtonProps) => (
  <div data-testid={`option-${id}`} className="card mr-10 ml-10 w-100">
    <section className="layout-row align-items-center justify-content-center mr-10 ml-10 pr-10 pl-10">
      <h3 data-testid={`choice-${id}`}>{text}</h3>
    </section>
    <section className="layout-row align-items-center justify-content-center mr-10 ml-10 mb-10 pr-10 pl-10">
      <button onClick={onClick} disabled={disabled} data-testid={`vote-button-${id}`}>
        Vote
      </button>
    </section>
  </div>
)

export default Vote;
