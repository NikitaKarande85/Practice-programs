/*2. Write a program which accept string from
user and copy the contents of that string into another
string. (Implement strncpy() function)
Input :   “Marvellous Multi OS”
           10
Output :   “Marvellous    */
#include<stdio.h>
int main()
{
    char a[100]="Marvellous Multi OS";
    int c=0;
    char b[100];

    printf("Enter the number:\n");
    scanf("%d",&c);
    functioncall(a,b,c);
    return 0;
}
int functioncall(char *srr1,char *brr,int c)
{
    int i=0,j,k=0,l;
    char *ptr=brr;
    // printf("%d=%s",c,srr1);
        while(srr1[i]!='\0'&&c!=0)
           {
               *ptr=srr1[i];
               *ptr++;
               i++;
               c--;
           }
     *ptr='\0';
    printf("%s",brr);

}

