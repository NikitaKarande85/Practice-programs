/*4.Write a program which accept range from user and
 return addition of all even numbers in between that range.
  (Range should contains positive numbers only)
Input :  23 30
Output :  108
Input :  10 18
Output :  70
Input :  -10 2
Output :  Invalid range
Input :  90 18
Output :  Invalid range  */
#include<stdio.h>
int main()
{
    int start=0,end=0;
    printf("Enter the start value:");
    scanf("%d",&start);
    printf("Enter the end value");
    scanf("%d",&end);
    displayfun(start,end);
    return;
}
void displayfun(no1,no2)
{
    int i=0,j=0;
    if(j<no1)
    {
        while(no1<=no2)
        {
             if(no1%2==0)
             {
                 i=(i+no1);
             }
             no1++;
        }
     printf("%d ",i);
    }
    else
    {
        printf("Invalid number");
    }


}
