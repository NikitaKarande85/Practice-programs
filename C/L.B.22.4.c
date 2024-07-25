/*4. Accept N numbers from user and return frequency of 11 form it.
Input :  N :   6
  Elements : 85 66 3 15 93 88
Output : 0
Input :  N :   6
  Elements : 85 11 3 15 11 111
Output : 2    */
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
    int i=0,count=0;
    for(i=0;i<a;i++)
    {
        if(arr[i]==11)
        {
            count++;
        }
    }
    printf("%d",count);

}

