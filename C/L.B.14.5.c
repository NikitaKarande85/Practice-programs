/*5. Accept number from user and display below pattern.
Input :  8
Output : 2 4 6 8 10 12 14 16 */
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
    int i=0;
    while(a>0)
    {
        i=i+2;
        printf("%d\t",i);
        a--;
    }

}
