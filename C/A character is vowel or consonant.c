//A character is vowel or consonant
#include<stdio.h>
int main()
{
    char a;
    printf("Enter the number");
    scanf("%c",&a);

    if(a=='a'||a=='e'||a=='i'||a=='o'||a=='u'||a=='A'||a=='E'||a=='O'||a=='U')
    {
        printf("Vowels");
    }
    else
    {
        printf("consonant");
    }
}
