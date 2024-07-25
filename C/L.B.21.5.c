/*5. Accept N numbers from user and
display all such elements which are multiples of 11.
Input :  N :   6
  Elements : 85 66 3 55 93 88
Output : 66 55 88*/
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
        if(arr[i]%11==0)
       {
           printf("%d\t",arr[i]);
       }
    }
}
