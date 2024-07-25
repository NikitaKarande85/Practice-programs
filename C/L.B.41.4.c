/*4.Write a program which number from user and display below pattern.
Input :   7846
Output :   7 # # # # # # #
           8 # # # # # # # #
           4 # # # #
           6 # # # # # #    */
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
      while(r<=a);
      {
          printf("%d",r);
          while(r>=a)
          {
              printf("#");
              r--;
          }

          r--;
      }

      a=1;
      r=0;
      printf("\n");
      y=y/10;
  }
}
