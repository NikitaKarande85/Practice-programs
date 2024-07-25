/*5. Write a program which accept string
 from user and count number of white spaces
Input :   “MarvellouS”
Output :   0
Input :   “MarvellouS Infosystems”
Output :   1
Input :   “MarvellouS Infosystems by Piyush Manohar Khairnnar”
Output :   5 */
#include<stdio.h>
int main()
{
    char a[20],ans;
    printf("Enter the string:\n");
    gets(a);
    ans=funcall(a);
    printf("%d",ans);
    return 0;
}
int funcall(char *a)
{
    int i,c=0;

        while(*(a+i))
        {
            if(*a==' ')
             {
                 c++;
             }
             *a++;
        }
        return c;
}
