# Work Day Scheduler

## Description

Using starter code provided, I created a functioning work day scheduler. On this scheduler, you will be able to see the current date and time displayed in the header. 

As you scroll down the page, you will see timeblocks for standard business hours. Each timeblock is color coded to indicate whether that time is in the past, present, or future. For timeblocks in the past, the area will fill grey. For the current timeblock, the area will fill red. For any timeblocks in the future, the area will fill green. 

Users are able to input tasks or projects within each timeblock. Using the blue save button on the right of each timeblock, the user is able to locally save the inputted tasks. Upon refresh of the page, the text persists where entered.

## Screenshot of Site

<img width="1263" alt="image of workday scheduler" src="https://github.com/camilleramos1/work-day-scheduler/assets/129894673/cf6181f0-19d5-4497-bbbd-bf224f57ab7d">

## Link to Live Application

https://camilleramos1.github.io/work-day-scheduler/

## Resources 

For the variable "workHour" in my JavaScript file, I used the following code found on a Stack Overflow article:
"parseInt($(this).attr('id').match(/hour-(\d+)/)[1], 10);"

Here is the link to the exact article I used:

https://stackoverflow.com/questions/2030213/javascript-jquery-grabbing-an-integer-from-an-elements-id
