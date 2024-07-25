/*2. Accept N numbers from user and return the smallest number.
Input :  N :   6
  Elements : 85 66 3 66 93 88
  Output : 3  */
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
    int i=0,count=1;
    for(i=0;i<a;i++)
    {
        if(arr[0]>arr[i])
        {
            arr[0]=arr[i];
        }
    }
    printf("%d",arr[0]);

}
