/*1. Write a program which accept number from user
and if number is less than 50 then print small ,
 if it is greater than 50 and
 less than 100 then print medium,
     if it is greater than 100 then print large.
     Input : 75
    Output : Medium */
#include<stdio.h>
int main()
{
    int No=0;
    printf("Enter the value");
    scanf("%d",&No);

    acceptno(No);
    return 0;
}
int acceptno(int No)
{
    if(No<=50)
    {
        printf("small");
    }
    else if(No>=50&&No<=100)
    {
        printf("Medium");
    }
    else
    {
        printf("Large");
    }
}
