/*4. Write a program which accept string from user
and copy the contents into another string by
removing extra white spaces.
Input :   “Marvel    lous    multi     OS”
Output :   “Marvel lous multi OS”   */
#include<stdio.h>
int main()
{
    int ans;
    char srr[300]=" Marvel    lous         multi     OS";
   funcall(srr);
    return 0;
}
int funcall(char *str)
{
    int i,j;
    char brr[100];
    char *ptr=brr;
    while(str[i]!='\0')
    {
        if(str[i]!=' '||str[i+1]!=' ')
        {
            *ptr=str[i];
            *ptr++;
        }
        i++;
    }
    printf("%s",brr);

}
