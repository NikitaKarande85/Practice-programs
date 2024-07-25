/*2. Accept N numbers from user and
display all such elements which are divisible by 5.
Input :  N :   6
  Elements : 85 66 3 80 93 88
Output : 85 80 */
#include<stdio.h>
int main()
{
    int a,i=0,cnt=0;
    int *p;
    printf("Enter the number of element:\n");
    scanf("%d",&a);

    p=(int*)malloc(a*sizeof(int));

    printf("Enter the elements\n");

    for(i=0;i<a;i++)
    {
        scanf("%d",p+i);
        cnt++;
    }
    printf("your element is %d\n",cnt);

    funcall(p,a);
    free(p);
    return 0;
}
int funcall(int arr[],int a)
{
    int i;
    for(i=0;i<a;i++)
    {
        if(arr[i]%5==0)
       {
           printf("%d\t",arr[i]);
       }
    }
}
