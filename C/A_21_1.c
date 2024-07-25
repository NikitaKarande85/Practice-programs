// 1. Accept N numbers from user and return difference between summation 
// of even elements and summation of odd elements. 
// Input : N : 6 
//  Elements : 85 66 3 80 93 88 
// Output : 53 (234 - 181) 
#include<stdio.h>
#include <stdlib.h>
void Display(int arr[],int no)
{
    int i=0,iSumOdd=0,iSumEven=0;
    for(i=1;i<=no;i++)
    {
        if(arr[i]%2==0)
        {
            iSumEven=iSumEven+arr[i];
        }
        else{
            iSumOdd=iSumOdd+arr[i];
        }
    }
    printf("%d",(iSumEven-iSumOdd));
}
int main()
{
    int No=0,*ptr=NULL,i=0;
    printf("Enter the number of element:");
    scanf("%d",&No);

    ptr=(int*)malloc(4*No);
    
    if(ptr==NULL)
    {
        printf("Memory not allocate");
        return -1;
    }
    else
    {
        printf("Memory allocate");
    }   
    
    for(i=1;i<=No;i++)
    {
        scanf("%d",&ptr[i]);
    }
    Display(ptr,No);
    free(ptr);
    return 0;
}