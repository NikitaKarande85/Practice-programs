/*5. Accept division of student from
 user and depends on the division display
 exam timing. There are 4 divisions in school
  as A,B,C,D. Exam of division A at 7 AM, B at 8.30 AM,
   C at 9.20 AM and D at 10.30 AM.
   (Application should be case insensitive)
Input :  C
Output :  Your exam at 9.20 AM
Input :  d
Output :  Your exam at 10.30 AM */
#include<stdio.h>
int main()
{
    char a='\0',ans;
    printf("Enter the character:\n");
    scanf("%c",&a);

    ans=funcall(a);
    return 0;
}
void funcall(char a)
{
    switch(a)
    {
         case'a':
         case'A':
            printf("7 am");
            break;
         case'b':
         case'B':
            printf("8.30 am");
            break;
         case'c':
         case'C':
            printf("9.20 am");
            break;
         case'd':
         case'D':
            printf("10.30 am");
            break;
         default:
            printf("You are wrong");
    }
}
