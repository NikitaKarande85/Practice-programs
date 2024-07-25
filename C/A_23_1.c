// 1. Accept N numbers from user and return the largest number. 
// Input : N : 6 
//  Elements : 85 66 3 66 93 88 
// Output : 93
#include<stdio.h>
#include<stdlib.h>
void Display(int arr[],int No)
{
    int i=1;
    int iCopy=0;
    iCopy=arr[i];
    for(i=1;i<=No;i++)
    {
        if(iCopy<arr[i])
        {
            iCopy=arr[i];
        }
    }
    printf("%d",iCopy);
}
int main()
{
    int No=0,i=0,*ptr=NULL;
    printf("Enter the number :");
    scanf("%d",&No);

    ptr=(int*)malloc(sizeof(int)*No);
    if(ptr==NULL)
    {
        printf("Your memory not allocated:");
    }
    else
    {
        printf("Your memory is allocated:");
    }

    for(i=1;i<=No;i++)
    {
        scanf("%d",&ptr[i]);
    }
    Display(ptr,No);
    free(ptr);
    return 0;

}