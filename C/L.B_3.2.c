/*3. Write a program which accept number from user
 and print even factors of that number.
Input :  36
Output:  2 6 12 18  */
#include<stdio.h>
int main()
{
    int iValue=0;
    printf("Enter the number\n");
    scanf("%d",&iValue);
    Displayfactor(iValue);
    return 0;
}
void Displayfactor(int no)
{
    int i=0;
    if(no <= 0)
    {
        no= -no;
    }
    for(i=1;i<no;i++)
    {
        if(i%2==0&&no%i==0)
        {
            printf("%d ",i);
        }
    }
}
