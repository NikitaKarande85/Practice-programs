/*4.Write a program which accept number
 from user and display its table.
Input :  2
Output :  2 4 6 8 10 12 14 16 18 20
Input :  5
Output :  5 10 15 20 25 30 35 40 45 50
Input :  -5
Output :  5 10 15 20 25 30 35 40 45 50*/
#include<stdio.h>
int main()
{
    int no=0;
    printf("Enter the number");
    scanf("%d",&no);
    displayno(no);
    return 0;
}
void displayno(int no)
{
    int i=1,cnt=1;
    while(i<=10)
    {
        cnt=i*no;
        printf("%d ",cnt);
        i++;
    }

}

