/*3. Accept N numbers from user and
display all such elements which
are even and divisible by 5.
Input :  N :   6
  Elements : 85 66 3 80 93 88
Output : 80 */
#include<stdio.h>
int main()
{
    int a,*p,i,cnt=0;
    printf("Enter the number of elements\n");
    scanf("%d",&a);

    p=(int*)malloc(a*sizeof(int));

    printf("Enter the numbers\n");

    for(i=0;i<a;i++)
    {
        scanf("%d",p+i);
        cnt++;
    }
    printf("your number is %d\n",cnt);

    funcall(p,a);
    free(p);
    return 0;

}
int funcall(int arr[],int a)
{
    int i;
    for(i=0;i<a;i++)
    {
        if(arr[i]%2==0)
        {
            if(arr[i]%5==0)
            {
                printf("%d ",arr[i]);
            }
        }
    }
}
