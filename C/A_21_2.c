// 2. Accept N numbers from user and display all such elements which are 
// divisible by 5. 
// Input : N : 6 
//  Elements : 85 66 3 80 93 88 
// Output : 85 80 
#include<stdio.h>
#include<stdlib.h>
void Display(int arr[],int No)
{
    int i=0;
    for(i=1;i<=No;i++)
    {
        if(arr[i]%5==0)
        {
            printf("%d ",arr[i]);
        }
    }
}
int main()
{
    int No=0,i=0,*ptr=NULL;
    printf("Enter the number of element:");
    scanf("%d",&No);

    ptr=(int*)malloc(sizeof(int)*No);

    printf("Enter the element:");
    for(i=1;i<=No;i++)
    {
        scanf("%d",&ptr[i]);
    }
    Display(ptr,No);
    free(ptr);
    return 0;
}