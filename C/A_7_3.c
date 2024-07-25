// 3. Write a program which accept number from user and print its numbers line. 
// Input : 4 
// Output : -4 -3 -2 -1 0 1 2 3 4
#include<stdio.h>
int main()
{
    int No=0,i=0,iCopy=0;
    printf("Enter the one value:");
    scanf("%d",&No);

    iCopy=-No;
    while(iCopy<=No)
    {
        printf("%d ",iCopy);
        iCopy++;
    }
    return 0;
}