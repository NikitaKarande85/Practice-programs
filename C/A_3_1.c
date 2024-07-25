// 1.Write a program which accept one number from user and print that number of
// even numbers on screen.
// Input : 7
// Output: 2 4 6 8 10 12 14
#include <stdio.h>
void PrintEven(int No1)
{
    int i = 0;
    for (i = 1; i <= No1 * 2; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d ", i);
        }
    }
    //   int iEven=0;
    //     while(iNo>0)
    //     {
    //        iEven=iEven+2;
    //        printf("%d\n",iEven);
    //        iNo--;
    //     }
}
int main()
{
    int No1 = 0;
    printf("Enter the one number:");
    scanf("%d", &No1);
    PrintEven(No1);
    return 0;
}