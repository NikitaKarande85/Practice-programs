/*4. Accept number from user and display below pattern.
Input :  4
Output : # 1 * # 2 * # 3 * # 4 *  */
#include<stdio.h>
int main()
{
    int a;

    printf("Enter the value");
    scanf("%d",&a);

    funcall(a);
    return 0;
}
int funcall(int a)
{
    int i=1;
    while(i<=4)
    {
        printf("# ");
        printf("%d ",i);
        printf("* ");
        i++;
    }
}

