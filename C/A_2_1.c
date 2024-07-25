//1.Accept one number from user and print that number of * on screen. 
// 5. Accept one number from user and print that number of * on screen. 
#include<stdio.h>
void Pattern(int No1)
{
   int i=0;
   for(i=0;i<No1;i++)
   {
       printf("* ");
   }
}
int main()
{
    int No1=0;
    printf("Enter the number:");
    scanf("%d",&No1);
    Pattern(No1);
    return 0;
}