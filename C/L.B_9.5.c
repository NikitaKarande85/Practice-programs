/*5. Write a program which returns difference between
Even factorial and odd factorial of given number.
Input :  5
Output :  -7   (8 - 15)
Input :  -5
Output :  -7   (8 - 15)
Input :  10
Output :  2895  (3840 - 945)*/
#include<stdio.h>
int main()
{
    int no1=0;
    printf("Enter the number\n");
    scanf("%d",&no1);
    display(no1);

}
int display(int no)
{
    int i=0,f=1,s=1,k;
    for(i=1;i<=no;i++)
    {
        if(i%2!=0)
        {
            f=f*i;
        }
        else if(i%2==0)
        {
            s=s*i;
        }
    }
    k=s-f;
    printf("your ans is %d",k);
}
