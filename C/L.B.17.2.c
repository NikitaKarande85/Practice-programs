/*2. Accept number of rows and number of columns from user and display below pattern.
Input :  iRow = 4  iCol = 5
Output : 2 4 6 8 10
         1 3 5 7 9
         2 4 6 8 10
         1 3 5 7 9   */
#include<stdio.h>
int main()
{
    int a,b;

    printf("Enter the Row: ");
    scanf("%d",&a);

    printf("Enter the column: ");
    scanf("%d",&b);

    funcall(a,b);
    return 0;
}
int funcall(int a,int b)
{
     int i,j,k,p=0;
     k=2;
     for(i=1;i<=a;i++)
     {

        {
           if(k%2==0)
            {
                for(j=1;j<=b;j++)
                {
                    p=p+2;
                    printf("%d ",p);

                }

            }
            else
            {
                p=1;
                for(j=1;j<=b;j++)
                {
                     p=p+2;
                     printf("%d ",p);
                }
            }
         printf("\n");
         k--;
         p=0;

        }

     }

}
