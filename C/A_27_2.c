// 4. Write a program which accept string from user and copy small 
// characters of that string into another string. 
// Input : “Marvellous multi OS” 
// Output : “arvellous multi”
#include <stdio.h>
int main()
{
    char str[20],brr[20];
    int i = 0,count=0,j=0;
    printf("Enter the number:");
    gets(str);
    brr[j]='\0';
    while (str[i] != '\0')
    {
        if (str[i] >= 'a' && str[i] <= 'z')
        {
            brr[j]=str[i];
            j++;
        }
        if(str[i]==' ')
        {
            brr[j]=' ';
            j++;
        }
        i++;
    }
    printf("%s",brr);
    // printf("Your capital letter is:%d",count);
}