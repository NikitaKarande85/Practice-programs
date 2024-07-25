/*3. Accept number from user and display below pattern.
Input :  5
Output : 1 * 2 * 3 * 4 * 5 * */
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
    while(i<=a)
    {
        printf("%d\t",i);
        printf("*\t");
        i++;
    }
}
