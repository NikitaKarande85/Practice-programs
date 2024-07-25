/*5. Write a program which accept number from user
and display its table in reverse order.
Input :  2 Output :  20 18 16 14 12 10 8 6 4 2
Input :  5 Output :  50 45 40 35 30 25 20 15 10 5
Input :  -5 Output :  50 45 40 35 30 25 20 15 10 5*/
#include<stdio.h>
int main()
{
    int no=0;
    printf("Enter the number");
    scanf("%d",&no);
    rev(no);
    return 0;
}
void rev(int no)
{
    int i=10,cnt;
    while(i>0)
    {
        cnt=i*no;
        printf("%d ",cnt);
        --i;
    }
}
