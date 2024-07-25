// 1.Write a program which number from user and display below pattern.
// Input : 7846
// Output :
//  6 4 8 7
//  6 4 8 7
//  6 4 8 7
//  6 4 8 7
#include <stdio.h>
int main()
{
    int no = 0, count = 0, copy = 0, i = 0, j = 0, iRem = 0;
    printf("Enter the number:");
    scanf("%d", &no);

    copy = no;
    while (copy != '\0')
    {
        count++;
        copy = copy / 10;
    }
    copy = no;
    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
            iRem = copy % 10;
            printf("%d ", iRem);
            copy = copy / 10;
        }
        copy = no;
        printf("\n");
    }
}