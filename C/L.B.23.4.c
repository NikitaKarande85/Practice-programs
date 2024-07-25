/*4. Accept N numbers from user and accept Range,
 Display all elements from that range
Input :  N :   6
  Start: 60
  End :  90
  Elements : 85 66 3 76 93 88
Output :85 66 76 88
Input :  N :   6
  Start: 30
  End :  50
  Elements : 85 66 3 76 93 88   */
#include<stdio.h>
int main()
{
    int a,b,*p,n,i;
    printf("Enter the number of element\n");
    scanf("%d",&n);

    printf("Enter the 1st range\n");
    scanf("%d",&a);

    printf("Enter last range\n");
    scanf("%d",&b);

    p=(int*)malloc(a*sizeof(int));

    printf("Enter the numbers\n");

    for(i=0;i<n;i++)
    {
        scanf("%d",p+i);
    }
    funcall(p,a,b,n);
    free(p);
    return 0;
}
int funcall(int arr[],int a,int b,int n)
{
    int i;
    for(i=0;i<n;i++)
    {
        if(arr[i]>=a&&arr[i]<=b)
        {
            printf("%d ",arr[i]);
        }
    }
}
