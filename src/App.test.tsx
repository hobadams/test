import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { pollData } from "./types/Poll";

describe("typescript-poll-manager", () => {
  beforeEach(() => {
    render(<App />)
  });
  test("renders the app with initial state", () => {
    const questionElement = screen.getByText(pollData.question);
    expect(questionElement).toBeInTheDocument();
  });

  test("renders correct choice 1", () => {
    const choice1 = screen.getByTestId("choice-1");
    expect(choice1).toBeInTheDocument();
    expect(choice1.textContent).toEqual(pollData.options[0].text);
  });

  test("renders correct choice 2", () => {
    const choice2 = screen.getByTestId("choice-2");
    expect(choice2).toBeInTheDocument();
    expect(choice2.textContent).toEqual(pollData.options[1].text);
  });

  test("shows correct vote count after voting", () => {
    const voteButton1 = screen.getByTestId("vote-button-1");
    fireEvent.click(voteButton1);

    const resultText = screen.getByTestId("result");
    expect(resultText).toBeInTheDocument();
    expect(resultText.textContent).toEqual(
      `${pollData.options[0].text} is leading by 1 vote(s)`
    );
  });

  test('shows "It\'s a tie" when both options have equal votes', () => {
    const voteButton1 = screen.getByTestId("vote-button-1");
    const voteButton2 = screen.getByTestId("vote-button-2");

    fireEvent.click(voteButton1);
    fireEvent.click(voteButton2);

    const resultText = screen.getByTestId("result");
    expect(resultText).toBeInTheDocument();
    expect(resultText.textContent).toEqual("It's a tie");
  });

  test('"View Winner" button is disabled when no votes have been cast', () => {
    const viewWinnerButton = screen.getByTestId("winner-button");
    expect(viewWinnerButton).toBeDisabled();
  });

  test('"View Winner" button is disabled when winner is declared', () => {
    const voteButton1 = screen.getByTestId("vote-button-1");
    fireEvent.click(voteButton1);

    const resultText = screen.getByTestId("result");
    expect(resultText).toBeInTheDocument();
    expect(resultText.textContent).toEqual(
      `${pollData.options[0].text} is leading by 1 vote(s)`
    );

    const viewWinnerButton = screen.getByTestId("winner-button");
    fireEvent.click(viewWinnerButton);
    expect(viewWinnerButton).toBeDisabled();
  });

  test("vote buttons are disabled when winner is declared", () => {
    const voteButton1 = screen.getByTestId("vote-button-1");

    fireEvent.click(voteButton1);

    const viewWinnerButton = screen.getByTestId("winner-button");
    fireEvent.click(viewWinnerButton);

    const voteButton1Disabled = screen.getByTestId("vote-button-1");
    const voteButton2Disabled = screen.getByTestId("vote-button-2");

    expect(voteButton1Disabled).toBeDisabled();
    expect(voteButton2Disabled).toBeDisabled();
  });

  test('shows the winner when "View Winner" is clicked', () => {
    const voteButton1 = screen.getByTestId("vote-button-1");

    fireEvent.click(voteButton1);
    fireEvent.click(voteButton1);

    const viewWinnerButton = screen.getByTestId("winner-button");
    fireEvent.click(viewWinnerButton);

    const winnerText = screen.getByTestId("result");
    expect(winnerText).toBeInTheDocument();
    expect(winnerText.textContent).toEqual(
      `${pollData.options[0].text} won by 2 vote(s)`
    );
  });
});
