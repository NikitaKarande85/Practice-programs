/*1. Write a program which displays ASCII table.
Table contains symbol, Decimal, Hexadecimal and Octal
representation of every member from 0 to 255.*/
#include<stdio.h>
int main()
{
    displayascii();
    return 0;
}
void displayascii()
{
    int i;
    for(i=0;i<122;i++)
    {
        printf("%d=%c\t",i,i);
    }
}
