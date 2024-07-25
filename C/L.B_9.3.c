/*3.Write a program to find even factorial of given number.
Input :  5
Output :  8   (4 * 2)
Input :  -5
Output :  8   (4 * 2)
Input :  10
Output :  3840  (10 * 8 * 6 * 4 * 2)*/
#include<stdio.h>
int main()
{
    int even_no=0;
    printf("Enter the number");
    scanf("%d",&even_no);
   display(even_no);
   return 0;

}
int display(int no)
{
    int i,f=1;
    for(i=1;i<=no;i++)
    {
        if(i%2==0)
        {
            f=f*i;
        }
    }
    printf("your ans is %d",f);
}
