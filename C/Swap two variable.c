//Swap two variable
#include<stdio.h>
int main()
{
    int a,b,temp;
    printf("Enter the two number:\n");
    scanf("%d%d",&a,&b);
    printf("Before swapping variable %d %d\n\n",a,b);
    temp=a;
    a=b;
    b=temp;
    printf("After swapping variable %d %d\n",a,b);

}
