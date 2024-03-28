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
  const text = getResultsText(poll, viewWinner)
  return (
    <>
      <p data-testid="result">{text && text}</p>
      <section className="layout-row align-items-center justify-content-center mr-10 ml-10 pr-10 pl-10">
        <button data-testid="winner-button" onClick={() => setViewWinner(!viewWinner)} disabled={!hasVotes || viewWinner}>
          View Winner
        </button>
      </section>
    </>
  );
};

const getResultsText = (poll: Poll, viewWinner: boolean): string | null => {

  const hasVotes = poll.options.some((option) => option.votes > 0);

  if (!hasVotes) return null;

  const voteDifference = getMostVotedWithDifference(poll.options);
  const winner = poll.options.find((option) => option.votes === Math.max(...poll.options.map((option) => option.votes)));

  if (voteDifference === null) return 'It\'s a tie';

  if (viewWinner) {
    return `${winner?.text} won by ${voteDifference?.difference} vote(s)`;
  }

  return `${poll.options.find((option) => option.id === voteDifference.id)?.text} is leading by ${voteDifference.difference} vote(s)`;

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
