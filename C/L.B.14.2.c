/*2. Accept number from user and display below pattern.
Input :  5
Output : 5 # 4 # 3 # 2 # 1 #*/
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
       while(1<=a)
       {
           printf("%d\t",a);
           printf("#\t");
           a--;
       }
}
