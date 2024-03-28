import React from 'react';
import { Poll, PollOption } from '../../types/Poll';

interface ResultsProps {
  poll: Poll;
  viewWinner: boolean;
  setViewWinner: (viewWinner: boolean) => void;
  totalVotes: number;
}

const Results: React.FC<ResultsProps> = ({ poll, viewWinner, setViewWinner, totalVotes }) => {
  const hasVotes = poll.options.some((option) => option.votes > 0);
  return (
    <>
      <p data-testid="result">{getResultsText(poll, viewWinner)}</p>
      <section className="layout-row align-items-center justify-content-center mr-10 ml-10 pr-10 pl-10">
        <button data-testid="winner-button" onClick={() => setViewWinner(!viewWinner)} disabled={!hasVotes || viewWinner}>
          View Winner
        </button>
      </section>
    </>
  );
};

const getResultsText = (poll: Poll, viewWinner: boolean): string => {

  const hasVotes = poll.options.some((option) => option.votes > 0);

  if (!hasVotes) return 'No votes yet!';

  const voteDifference = getMostVotedWithDifference(poll.options);

  if (voteDifference === null) return 'Its a tie!';

  if (viewWinner) {
    return `${poll.options.find((option) => option.id === voteDifference.id)?.text} won by ${voteDifference.difference} vote(s)`;
  }

  return `${poll.options.find((option) => option.id === voteDifference.id)?.text} is winning with a difference of ${voteDifference.difference} vote(s)`;

}

interface OptionWIthVoteDifferent {
  id: number,
  difference: number
}

const getMostVotedWithDifference = (options: PollOption[]): OptionWIthVoteDifferent | null => {

  if (options.length < 2) return null;

  const sortedOptions = [...options].sort((a, b) => b.votes - a.votes);

  const mostVoted = sortedOptions[0];
  const secondMostVoted = sortedOptions[1];

  const voteDifference = mostVoted.votes - secondMostVoted.votes;

  if (voteDifference === 0) return null;

  return {
    id: mostVoted.id,
    difference: voteDifference,
  };
}

export default Results;
