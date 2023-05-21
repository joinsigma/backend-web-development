# Module Capstone Project ~ Sorting Algo terminal app

For this module's capstone project, you'll be creating a node.js terminal program.

The purpose of the program is to test out sorting these algorithms, implement each sorting algorithm by using any method you deem fit from the Lodash package (You must use at least 1 for EACH sorting algorithm):

* Selection sort
* Insertion sort
* Bubble sort
* Merge sort (Toughest to implement)
  
To get the user's option, you will have to use the inquirer package.
E.g. output of the terminal

1) Asking the user which sorting algorithm to test

2) After selecting, prompt the user to enter a list

3) After entering the list, it should print out the list after each "item swap", and then finally the time taken for the sort (if you're using a small list it will be very quick, most of the time it will take 0ms). Additionally, after the sort, it should wait for the user to press any before continuing.

4) After the user presses any key, it should print out the list of questions again.

5) If the user chooses option 5, it should output this message and then quit the program

## Running the script

Run the following commands in the terminal, in order:
`npm install` // To install all the packages required
`node index.js`
