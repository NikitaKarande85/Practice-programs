// 4. Accept two numbers from user and display first number in second 
// number of times. 
// Input : 12 5 
// Output : 12 12 12 12 12 
// Input : -2 3 
// Output : -2 -2 -2 
// Input : 21 -3 
// Output : 21 21 21 
// Input : -2 0 
// Output : 
#include<stdio.h>
void Display(int No1,int iFreq)
{
    int i=0;
    if(iFreq<0)
    {
        iFreq=-iFreq;
    }
    for(i=0;i<iFreq;i++)
    {
        printf("%d ",No1);
    }
}
int main()
{
    int No1=0,iFreq=0;
    printf("Enter the number:");
    scanf("%d",&No1);

    printf("Enter the frequency number:");
    scanf("%d",&iFreq);

    Display(No1,iFreq);
    return 0;
}