/*1. Write a program which accept string from user
 and copy that characters of that string into another
  string in reverse order.
Input :   “Marvellous Python”
Output :   “nohtyP suollevraM” */
#include<stdio.h>
#include<stdlib.h>

void RevStr(char *arr,char *brr)
{
  char iStart=0,iEnd=0,temp='\0',i=0;

  while(arr[i]!='\0')
  {
      brr[i]=arr[i];
      i++;
  }
  ///string copy

  while(brr[iEnd]!='\0')
  {
      iEnd++;
  }
  iEnd--;

  while(iStart<iEnd)
  {
      temp=brr[iStart];
      brr[iStart]=brr[iEnd];
      brr[iEnd]=temp;
      iStart++;
      iEnd--;
  }
}
int main()
{
    char arr[30],brr[30];
    printf("Enter the string:");
    scanf(" %[^'\n']s",arr);
    RevStr(arr,brr);
    printf("%s",brr);
    return 0;
}