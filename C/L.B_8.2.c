/*2. Accept single digit number from user
and print it into word.
Input : 9  Output : Nine
Input : -3 Output : Three
Input : 12 Output : Invalid Number*/
#include<stdio.h>
int main()
{
    int No=0;
    printf("Enter the digit\n");
    scanf("%d",&No);
    Display(No);
    return 0;
}
void Display(int iNo)
{
    switch(iNo)
    {
      case 1 :
      case -1 :
            printf("One");
            break;
      case 2:
      case -2:
            printf("Two");
            break;
      case 3:
      case -3:
            printf("Three");
            break;
      case 4:
      case -4:
            printf("Four");
            break;
      case 5:
      case -5:
            printf("Five");
            break;
      case 6:
      case -6:
            printf("Six");
            break;
      case 7:
            printf("Seven");
            break;
      case 8:
            printf("Eight");
            break;
      case 9:
      case -9:
             printf("Nine");
             break;
      default:
        printf("Invalid Value");
    }
}
