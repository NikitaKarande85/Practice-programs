/*2. Accept character from user.
 If character is small display its
  corresponding capital character,
  and if it small then display its corresponding
  capital. In other cases display as it is.
Input :  Q
Output : q
Input :  m
Output : M
Input :  4
Output : 4
Input :  %
Output : %  */
#include<stdio.h>
int main()
{
    char a='\0',ans;
    printf("Enter the character:\n");
    scanf("%c",&a);
    funcall(a);
    return 0;
}
void funcall(char a)
{
    int i;
    if(a>='A'&&a<='Z')
    {
        a=a+32;
        printf("%c",a);
    }
    else if(a>='a'&&a<='z')
    {
        a=a-32;
        printf("%c",a);
    }
    else
    {
        printf("%c",a);
    }
}
