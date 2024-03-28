# React TypeScript: Poll Manager

![](https://hrcdn.net/s3_pub/istreet-assets/ZGfwyhx572_EkNCGzMRkbA/poll-manager.gif)

Design a Poll Manager app that allows users to vote for one of two options and view the winner. The app should be built using TypeScript and React. Certain core React functionalities are already implemented.

The application has three components: _PollManager_, _Vote_, and _Results_, where their respective functionalities will be implemented.

_Vote_ component should:

- Display the text of each option.
- Provide a "Vote" button for each option to cast a vote.
- Disable the "Vote" button for each option when the winner is declared.

_Results_ component should:

- Display the current leader or tie status.
- Display the result text based on the following conditions:
  - If no votes have been cast, the result text should be empty: "".
  - If the same number of votes have been cast for both options, the result text should be: "It's a tie".
  - If one option has more votes than the other, the result text should be: "{LEADER} is leading by {VOTE_DIFFERENCE} vote(s)".
- "View Winner" button:
  - If no votes have been cast, the button should be disabled.
  - Clicking the "View Winner" button should:
    - Display the result text: "It's a tie", If the same number of votes have been cast for both options.
    - Display the result text: "{LEADER} won by {VOTE_DIFFERENCE} vote(s)", If one option has more votes than the other.
    - Disable the "View Winner" button
    - Disable the "Vote" button for each option

_PollManager_ component should:

- Display the poll question.
- Manage the state of the poll, including votes and winner status.
- Pass the relevant data and functions to the Vote and Results components.

The following _data-testid_ attributes are required in the components for the tests to pass:

| **Attribute**         | **Component**             |
|-----------------------|---------------------------|
| poll-manager          | PollManager container     |
| option-1              | Vote option 1 container   |
| option-2              | Vote option 1 container   |
| choice-1              | Choice 1 text             |
| choice-2              | Choice 2 text             |
| winner-button         | View Winner button        |


Note:

- Components have _data-testid_ attributes for test cases and certain classNames for rendering purposes. They should not be changed.
- The files that should be modified by the candidate are `src/components/PollManager/index.tsx`, `src/components/Vote/index.tsx`, `src/components/Results/index.tsx`, and `src/data/Poll.ts`.

## Environment

- React Version: 18.2.0
- Node Version: 14(LTS)
- Default Port: 8000

**Read Only Files**
- `src/App.test.tsx`
- `src/data/Poll.ts`


**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```

