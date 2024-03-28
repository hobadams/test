export interface PollOption {
  id: number;
  text: string;
  votes: number;
}

export interface Poll {
  question: string;
  options: PollOption[];
}

export const pollData: Poll = {
  question: 'Who is your favorite superhero?',
  options: [
    { id: 1, text: 'Superman', votes: 0 },
    { id: 2, text: 'Batman', votes: 0 },
  ],
};
