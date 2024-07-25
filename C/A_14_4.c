// 4. Accept number from user and display below pattern. 
// Input : 4 
// Output : # 1 * # 2 * # 3 * # 4 *
#include<stdio.h>
void Display(int No)
{
    int i=0;
    for(i=1;i<=No;i++)
    {
        printf("# ");
        printf("%d ",i);
        printf("* ");
    }
}
int main()
{
    int No=0;
    printf("Enter the number:");
    scanf("%d",&No);
    Display(No);
    return 0;
}