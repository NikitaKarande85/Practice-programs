// 1. Write a program which accept string from user and copy that 
// characters of that string into another string in reverse order. 
// Input : “Marvellous Python” 
// Output : “nohtyP suollevraM”
#include<stdio.h>
int main()
{
    char cValue[100],iCopy[20];
    int i=0,count=0,j=0;
    printf("Enter the string:");
    gets(cValue);
    //scanf("%[^'\n']s ",&cValue);
    printf("Your string is :%s\n",cValue);
    while(cValue[i]!='\0')
    {
        count++;
        i++;
    }
    j=count;
    iCopy[j]='\0';
    j--;
    printf("Your count is %d\n",count);
    for(i=0;i<count;i++)
    {
        iCopy[j]=cValue[i];
        printf("-> %c\n",iCopy[j]);
        j--;
    }
    printf("%s",iCopy);
    return 0;
}