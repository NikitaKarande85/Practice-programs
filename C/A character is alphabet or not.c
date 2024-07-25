//A character is alphabet or not
#include<stdio.h>
int main()
{
    char a;
    printf("Enter the character:");
    scanf("%c",&a);

    if(a>='a'&&a<='z'||a>='A'&&a<='Z')
    {
        printf("Character is alphabet");
    }
    else
    {
        printf("Character is not alphabet");
    }
}
