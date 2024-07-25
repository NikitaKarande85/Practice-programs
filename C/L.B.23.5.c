/*5. Accept N numbers from user and
return product of all odd elements.
Input :  N :   6
 Elements : 15 66 3 70 10 88
Output : 45
Input :  N :   6
 Elements : 44 66 72 70 10 88
Output : 0*/
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
        if(arr[i]%2!=0)
        {
            count=count*arr[i];
        }
    }
    printf("%d",count);

}

