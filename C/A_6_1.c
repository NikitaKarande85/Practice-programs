//  1. Write a program which accept name from user and print that name. 
//  Input : Piyush Khairnar 
//  Output : Piyush Khairnar
#include<stdio.h>
int main()
{
    char str[30];
    printf("Enter the string");
    // gets(str);
    scanf("%[^\n]s",str);
    // scanf("%s",str);
    printf("%s",str);
    return 0;
}