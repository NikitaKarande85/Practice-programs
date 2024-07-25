/*2.  Write a program which 2 strings from user
and check whether contents of two strings are equal or not.
 (Implement strcmp() function).
Input :   “Marvellous Infosystems”
          “Marvellous Infosystems”
Output :  TRUE */
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
    char arr[50] = "Marvellous Infosystems";
    char brr[30] = "Marvellous Infosystems";
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
