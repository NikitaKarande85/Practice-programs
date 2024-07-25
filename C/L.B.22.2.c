/*2. Accept N numbers from user and return difference
between frequency of even number and odd numbers.
Input :  N :   7
  Elements : 85 66 3 80 93 88 90
Output : 1 (4 -3) */
#include<stdio.h>
int main()
{
    int a=0,*p=NULL,i=0,count=0;
    printf("Enter the number of elements \n");
    scanf("%d",&a);

    p=(int*)malloc(a*sizeof(int));

    printf("enter the element\n");
     for(i=0;i<a;i++)
     {
         scanf("%d",p+i);
     }
     funcall(p,a);
     free(p);
}
int funcall(int arr[],int a)
{
    int i=0,even=0,odd=0,ans=0,x=0,z=0,k=0;
    for(i=0;i<a;i++)
    {
        if(arr[i]%2==0)
        {
            x++;
        }
        else
        {
            z++;
        }
        k=x-z;
    }
    printf("%d",k);
}
