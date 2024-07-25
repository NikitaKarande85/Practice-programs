/*2. Accept N numbers from user and accept
one another number as NO , return index of first occurrence of that NO.
Input :  N :   6
  NO:  66
  Elements : 85 66 3 66 93 88
Output : 1
Input :  N :   6
  NO:  12
  Elements : 85 11 3 15 11 111
Output : -1*/
#include<stdio.h>
int main()
{
    int a=0,*p=NULL,i=0,count=0,b=0,iRet;
    printf("Enter the number of elements \n");
    scanf("%d",&a);
    printf("Enter the value");
    scanf("%d",&b);

    p=(int*)malloc(a*sizeof(int));

    printf("enter the element\n");
     for(i=0;i<a;i++)
     {
         scanf("%d",p+i);
     }
     iRet=funcall(p,a,b);
     if(iRet == -1)
      {
            printf("%d",iRet);
      }
      else
      {
          printf("%d",iRet);
      }
     free(p);
}
int funcall(int arr[],int a,int b)
{
    int i=0,count=0;
    for(i=0;i<a;i++)
    {
        if(arr[i]==b)
        {
            count++;
        }
    }
    if(count>0)
    {
        return 1;
    }
    else
    {
        return -1;
    }

}
