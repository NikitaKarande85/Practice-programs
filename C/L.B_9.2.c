/*2. Accept amount in US dollar and return
its corresponding value in Indian currency.
 Consider 1$ as 70 rupees.
Input :  10 Output :  700
Input :  3 Output :  210
Input :  1200 Output :  84000*/
#include<stdio.h>
int main()
{
    int amount=0,fun=0;
    printf("Enter the amount\n");
    scanf("%d",&amount);
    fun=displayamount(amount);
    printf("your value is \n%d",fun);
}
int displayamount(int amount)
{
    int i;
    if(amount<=0)
    {
        return-1;
    }
    else if(amount>0)
    {
        i=(amount*70);
    }
    return i;
}
