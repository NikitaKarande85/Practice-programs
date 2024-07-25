// 3. Accept on number from user if number is less than 10 then print 
// // “Hello” otherwise print “Demo”.
#include<stdio.h>
void Display(int No1)
{
    if(No1<10)
    {
        printf("Hello");
    }
    else
    {
        printf("Demo");
    }
}
int main()
{
    int No1=0;
    printf("Enter the number:");
    scanf("%d",&No1);
    Display(No1);
    return 0;
}