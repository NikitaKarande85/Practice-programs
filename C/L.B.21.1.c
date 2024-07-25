/*1. Accept N numbers from user and return
 difference between summation of
 even elements and summation of odd elements.
Input :  N :   6
  Elements : 85 66 3 80 93 88
Output : 53 (234 - 181) */
#include<stdio.h>
int main()
{
    int iSize=0,iRet=0,iCnt=0,iLength=0,i=0;
    int *p;
    printf("Enter the number of elements:\n");
    scanf("%d",&iSize);

    p=(int*)malloc(iSize*sizeof(int));

    if(p==NULL)
    {
        printf("Not memory allocate:");
        return-1;
    }
    printf("Enter the elements: ");
    for(i=0;i<iSize;i++)
    {
        scanf("%d",p+i);
        iCnt++;
    }
    printf("\nEnter element is %d :\n",iCnt);

     iRet = Difference(p,iSize);
     printf("\nResult is %d",iRet);
     free(p);
     return 0;

}
int Difference(int arr[],int a)
{
    int odd=0,even=0,k=0,i;
    for(i=0;i<a;i++)
    if(arr[i]%2==0)
    {
        even=even+arr[i];
    }
    else
    {
       odd=odd+arr[i];
    }
    k=even-odd;
    return k;
}
