/*3. Accept on number from user if number is less than 10
then
print “Hello” otherwise print “Demo”. */
#include<stdio.h>
int main()
{
    int iValue=0;
    printf("Enter the number\n");
    scanf("%d",&iValue);
    Display(iValue);
    return 0;
}
int Display(int iNo)
{
    if(iNo<9)
    {
        printf("\nHello\n");
    }
    else
    {
        printf("\nDemo\n");
    }
}
