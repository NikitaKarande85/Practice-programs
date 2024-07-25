/*3. Write a program which 2 strings from user
 and check whether first N contents of two strings
  are equal or not. (Implement strcmp() function).
  Note : If third parameter is greater than the size of
   second string then concat whole string after first string.
Input :   “Marvellous Infosystems”
          “Marvellous Logic Building”
          10
Output :  TRUE   */
#include<stdio.h>
#define TRUE 1
#define FALSE 0
typedef int BOOL;
BOOL funcall(char*arr,char*brr,int a)
{
    char i=0,c=0;
    while(brr[i]!='\0'&&a!=0)
    {

    }
        if(arr[i]==brr[i])
            {
                return TRUE;
            }
            else
            {
                return FALSE;
            }

}
int main()
{
    int c;
    BOOL bret = TRUE;
    char arr[50] = "Marvellous Infosystems";
    char brr[30] = "Marvellous Logic Building";
    printf("Enter the number");
    scanf("%d",&c);
    bret = funcall(arr,brr,c);
    if(bret == TRUE)
    {
         printf("Both strings are equal");
    }
    else
    {
         printf("Both strings are not equal");
    }   return 0;
}
