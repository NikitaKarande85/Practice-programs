/*3. Write a program which accept distance
 in kilometre and convert it into meter.
  (1 kilometre = 1000 Meter)
Input :  5
Output :  5000
Input :  12
Output :  12000  */
#include<stdio.h>
int main()
{
    int no1=0,fun;
    printf("Enter the distance\n");
    scanf("%d",&no1);

    fun=displaydis(no1);
    printf("kilometer=%d",fun);
    return 0;
}
int displaydis(int no1)
{
    int i=1,j;
    while(i<no1)
    {
        j=(no1*1000);
        i--;
    }
    return j;
}
