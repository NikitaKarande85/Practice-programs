// 4. Accept N numbers from user and display all such numbers which contains
// 3 digits in it.
// Input : N : 6

//  Elements : 8225 665 3 76 953 858
// Output : 665 953 858
#include <stdio.h>
#include <stdlib.h>
void Display(int arr[], int No)
{
    int i = 1, count = 0;
    int iCopy = 0;

    for (i = 1; i <= No; i++)
    {
        iCopy = arr[i];
        while (iCopy != 0)
        {
            count++;
            iCopy = iCopy / 10;
        }
        if (count == 3)
        {
            printf("%d ", arr[i]);
        }
        count = 0;
    }
}
int main()
{
    int No = 0, i = 0, *ptr = NULL;
    printf("Enter the number :");
    scanf("%d", &No);

    ptr = (int *)malloc(sizeof(int) * No);
    if (ptr == NULL)
    {
        printf("Your memory not allocated:");
    }
    else
    {
        printf("Your memory is allocated:");
    }

    for (i = 1; i <= No; i++)
    {
        scanf("%d", &ptr[i]);
    }
    Display(ptr, No);
    free(ptr);
    return 0;
}