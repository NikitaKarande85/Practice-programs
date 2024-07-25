/*2.Write a program which number from user and display below pattern.
Input :   7846
Output :   7 8 4 6
           7 8 4 6
           7 8 4 6
           7 8 4 6   */
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
  int r=0,y=0,x=0,count=0,a=0;
  while(num!=0)
  {
      r=num%10;
      y=y*10+r;
      num=num/10;
      count++;
  }
  a=y;
  while(count!=0)
  {
      while(a!=0)
      {
          r=a%10;
          printf("%d",r);
          printf(" ");
          a=a/10;
      }
      printf("\n");
      a=y;
      count--;
  }
}
