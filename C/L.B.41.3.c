/*3.Write a program which number from user and display below pattern.
Input :   7846
Output :   7 6 5 4 3 2 1
           8 7 6 5 4 3 2 1
           4 3 2 1
           6 5 4 3 2 1  */
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
  int r=0,y=0,x=0,a=1;
  while(num!=0)
  {
      r=num%10;
      y=y*10+r;
      num=num/10;
  }
  while(y!=0)
  {
      r=y%10;
      while(r>=a)
      {
          printf("%d",r);
          r--;
      }
      a=1;
      r=0;
      printf("\n");
      y=y/10;
  }
}
