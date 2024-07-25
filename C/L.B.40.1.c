/*1.Write a program which number from user and display below pattern.
Input :   7846
Output :   6 4 8 7
           6 4 8 7
           6 4 8 7
           6 4 8 7  */
#include<stdio.h>
int main()
{
    int srr;
    printf("Enter the Numbers:");
    scanf("%d",&srr);
    funcall(srr);

    return 0;
}
void funcall(int num)
{
  int r=0,y=0,count=0,a=0;
  a=num;
  while(num!=0)
  {
      num=num/10;
      count++;
  }
  y=a;
  while(count>0)
  {
      while(y!=0)
      {
          r=y%10;
          printf("%d",r);
          printf(" ");
          y=y/10;
      }
      printf("\n");
      y=a;
      count--;
  }
}
