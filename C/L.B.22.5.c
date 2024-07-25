/*5. Accept N numbers from user and accept one another number as NO
  return frequency of NO form it.
Input :  N :   6
  NO:  66
  Elements : 85 66 3 66 93 88
Output : 2
Input :  N :   6
  NO:  12
  Elements : 85 11 3 15 11 111
Output : 0   */
#include<stdio.h>
int main()
{
    int a=0,*p=NULL,i=0,count=0,b=0;
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
     funcall(p,a,b);
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
    printf("%d",count);

}
