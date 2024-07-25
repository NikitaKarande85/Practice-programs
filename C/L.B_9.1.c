/*1.Write a program which accept number
from user and display below pattern.
Input :  5
Output :  * * * * * # # # # #
Input :  6
Output :  * * * * * * # # # # # # #
Input :  -5
Output :  * * * * * # # # # #
Input :  2 Output :  * * # #*/
#include<stdio.h>
int main()
{
    int no;
    printf("Enter the number");
    scanf("%d",&no);
    displaysh(no);
    return 0;
}
void displaysh(int no)
{
    int i;
    i=no;
    for(i;i>0;i--)
    {
       for(no;no>0;no--)
       {
           printf("* ");
       }
    printf("# ");
    }



}
