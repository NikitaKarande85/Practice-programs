/*2. Write a program which accept
 width & height of rectangle from user
 and calculate its area.
  (Area = Width * Height)
Input :  5.3  9.78
 Output :  51.834   */
#include<stdio.h>
int main()
{
    float height=0.0;
    float width=0.0;
    double fun=0.0;
    printf("Enter the width of rectangle\n");
    scanf("%f",&width);
    printf("Enter the height of rectangle\n");
    scanf("%f",&height);
    fun=displayarea(height,width);
    printf("area=%f",fun);
    return 0;
}
double displayarea(float no1,float no2)
{
    float i=0;
    if(no1!=0 && no2!=0)
    {
        i=(no1*no2);
    }
    return i;
}
