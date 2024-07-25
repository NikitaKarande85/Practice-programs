/*5. Accept character from user and
 display its ASCII value in decimal,
 octal and hexadecimal format.
Input :   A
Output :
   Decimal   65
   Octal   0101
  Hexadecimal  0X41*/
#include<stdio.h>
int main()
{
    char a;
    printf("Enter the number\n");
    scanf("%c",&a);

    printf("decimal %d\n",a);
    printf("Octal %o\n",a);
    printf("Hexadecimal %X\n",a);
    printf("Hexadecimal %x\n",a);
    return 0;
}
