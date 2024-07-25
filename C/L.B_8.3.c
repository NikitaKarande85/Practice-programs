/*3.Write a program to find factorial of given number.
Input :  5  Output :  120   (5 * 4 * 3 * 2 * 1)
 Input :  -5  Output :  120   (5 * 4 * 3 * 2 * 1)
 Input :  4  Output :  24   (4 * 3 * 2 * 1)*/
 #include<stdio.h>
 int main()
 {
     int no=0,fun=0;
     printf("Enter the value");
     scanf("%d",&no);

     fun=Fact(no);
     printf("Your ans is %d",fun);
}
int Fact(int no)
{
    int i=1;
    while(no>0)
    {
        i=i*no;
        no--;
    }
    return i;
}
