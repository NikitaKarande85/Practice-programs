/*4. Accept N numbers from user and display all
 such numbers which contains  3 digits in it.
Input :  N :   6
Elements : 8225  665 3 76 953 858
Output : 665 953 858   */
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
     return 0;
}
int funcall(int arr[],int a)
{
    int i=0,count=0,r,y,j,m;

    for(i=0;i<a;i++)
    {
        arr[i]=arr[m];

        while(arr[m]/10)
        {
            count=count+1;
        }
            if(count==3)
           {
             printf("ans is:%d",arr[i]);
           }
        }





}
