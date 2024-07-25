/*1. Accept N numbers from user and accept
 one another number as NO , check whether NO is present or not.
Input :  N :   6
  NO:  66
  Elements : 85 66 3 66 93 88
Output : TRUE
Input :  N :   6
  NO:  12
  Elements : 85 11 3 15 11 111
Output : FALSE     */
#include<stdio.h>
#define TRUE 1
#define FALSE 0
typedef int BOOL;
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
    if(0<count)
    {
        return TRUE;
    }
    else
    {
        return FALSE;
    }

}
int main()
{
    int a=0,*p=NULL,i=0,count=0,b=0,ans=0;
    BOOL bRet = FALSE;
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
     ans=funcall(p,a,b);
     if(ans==TRUE)
     {
         printf("TRUE");
     }
     else
     {
         printf("FALSE");
     }
     free(p);
     return 0;
}
