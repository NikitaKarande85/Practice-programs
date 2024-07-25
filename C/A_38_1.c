// 1.Write a program which accept string from user and print below
// pattern.
// Input : “Marvellous”
// Output :
//  M a r v e l l o u s
//  M a r v e l l o u s
//  M a r v e l l o u s
//  M a r v e l l o u s
//  M a r v e l l o u s
//  M a r v e l l o u s
//  M a r v e l l o u s
//  M a r v e l l o u s
//  M a r v e l l o u s
//  M a r v e l l o u s
// Input : “PPA”
// Output :
//  P P A
//  P P A
//  P P A
#include <stdio.h>
int main()
{
    char str[20];
    int i = 0, count = 0, j = 0;
    printf("Enter the number:");
    gets(str);

    while (str[i] != 0)
    {
        count++;
        i++;
    }
    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
             printf("%c ",str[j]);
        }
        printf("\n");
    }
    return 0;
}