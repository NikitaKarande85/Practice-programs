/*5. Write a program which accept string from user
reverse that string in place.
Input :   “abcd”
Output :   “dcba”
Input :   “abba”
Output :   “abba”*/
#include<stdio.h>
int main()
{
     char a[20],ans=0,b=0;
    printf("Enter the string:\n");
    gets(a);

    functioncall(a,b);
    return 0;
}
int functioncall(char *a)
{
    int l,i,b;
      for(l=0;a[l];l++);
      {
        for(i=0;i<l/2;i++)
        {
           b=a[i];
           a[i]=a[l-1-i];
           a[l-1-i]=b;
        }
     }
     printf("%s",a);

}
