/*1.Write a program which number from user and display below pattern.
Input :   7846
Output :   * * * * * * *
           * * * * * * * *
           * * * *
           * * * * * *      */
#include<stdio.h>
int main()
{
    int srr;
    printf("Enter the Numbers:");
    scanf("%d",&srr);
    funcall(srr);

    return 0;
}
int funcall(int num)
{
  int r=0,y=0,x=0;
  while(num!=0)
  {
      r=num%10;
      y=y*10+r;
      num=num/10;
  }
  while(y!=0)
  {
      r=y%10;
      while(r>0)
      {
          printf("*");
          r--;
      }
      r=0;
      printf("\n");
      y=y/10;
  }
}
