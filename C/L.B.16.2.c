/*2. Accept number of rows and number of
columns from user and display below pattern.
Input :  iRow = 4  iCol = 4
Output : A B C D
         a b c d
         A B C D
         a b c d   */
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
     int i,j,k;
     for(i=1;i<=a;i++)
     {
         if(i%2!=0)
         {
                 k='A';
                 for(j=1;j<=b;j++)
                 {
                        if(j<=b)
                        printf("%c\t",k);
                        k++;
                 }
         }
        else
          {
                  k='a';
                  for(j=1;j<=b;j++)
                  {
                    if(j<=b)

                    printf("%c\t",k);
                    k++;
                  }
          }
       printf("\n");
      }

}
