/*3.Write a program which accept two strings
 from user and check whether both the strings are
 equal or not without considering its case.
Input :   “MarvelloUS”
          “MARveLLous”
Output :   TRUE   */
#include<stdio.h>
#define TRUE 1
#define FALSE 0
typedef int BOOL;
BOOL funcall(char*arr,char*brr)
{
    int i,c=0;
    if(strlen(arr)==strlen(brr))
    {
        for(i=0;brr[i];i++)
        {
            if(brr[i]>='a'&&brr[i]<='z'||brr[i]>='A'&&brr[i]<='Z'||arr[i]>='a'&&arr[i]<='z'||arr[i]>='A'&&arr[i]<='Z')
            if(arr[i]==brr[i])
            {
                c++;
            }

        }
        if(c==i)
                return 1;
    }
    return 0;

}
int main()
{
    BOOL bret = TRUE;
    char arr[50] = "MarvelloUS";
    char brr[30] = "MARveLLous";
    bret = funcall(arr,brr);
    if(bret == TRUE)
    {
         printf("Both strings are equal");
    }
    else
    {
         printf("Both strings are not equal");
    }   return 0;
}
