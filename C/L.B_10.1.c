/*1.Write a program which accept radius of
 circle from user and calculate its area.
 Consider value of PI as 3.14.
 (Area = PI * Radius * Radius)
Input :  5.3
Output :  88.2026
Input :  10.4
Output :  339.6224 */
#include<stdio.h>
int main()
{
    float no1=0.0,area,pi=3.14;
    printf("Enter the Radius\n");
    scanf("%f",&no1);
    if(no1>0)
     {
       area=((pi*no1)*no1);
     }
    printf("your ans is %f",area);
    return 0;
}


