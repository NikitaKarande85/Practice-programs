/*2. Write a program which accept number from user
 and print even factors of that number.
Input :  24
Output:  1 2 4 6 8 12 */
#include<stdio.h>
int main()
{
    int iValue=0;
    printf("Enter the number\n");
    scanf("%d",&iValue);
    DisplayEvenfactor(iValue);
    return 0;
}
void DisplayEvenfactor(int no)
{
    int i=0;
    if(no <= 0)
    {
        no= -no;
    }
    for(i=1;i<no;i++)
    {
        if(no%i==0)
        {
            printf("%d ",i);
        }
    }
}
