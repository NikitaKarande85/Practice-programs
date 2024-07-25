/*3. Accept character from user. If it is
capital then display all the characters from
the input characters till Z. If input character
 is small then print all the characters in reverse
 order till a. In other cases return directly.
Input :  Q
Output : Q R S T U V W X Y Z
Input :  m
Output : m l k j i h g f e d c b a
Input :  8
Output :    */
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
        while(a<='Z')
        {
            printf("%c",a);
            a++;
        }
    }
    else if(a>='a'&&a<='z')
    {
        while(a>='a')
        {
            printf("%c",a);
            a--;
        }
    }
    else
    {
        printf(" ");
    }
}
