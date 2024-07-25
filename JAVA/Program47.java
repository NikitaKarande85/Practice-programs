/*1. Write a java program which accept number of rows and number of columns from user and display below pattern.
Input :  iRow = 4  iCol = 4
Output : * * * #
         * * # *
         * # * *
         # * * *
  */

import java.lang.*;
import java.util.*;

class DemoString
{
    void Pattern(int iRow,int iCol)
    {
        int k=0;
        for(int i=1;i<=iRow;i++)
        {
            k=1;
            for(int j=1;j<=iCol;j++)
            {
                if(j==(iCol+k)-i)
                {
                    System.out.print("# ");
                }
                else
                {
                    System.out.print("* ");
                }
            }
            System.out.print("\n");
        }
    }
}
class Demo
{
    public static void main(String arg[])
    {

        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the Row:");
        int iNo1=sobj.nextInt();

        System.out.println("Enter the Row:");
        int iNo2=sobj.nextInt();

        DemoString dobj=new DemoString();

        dobj.Pattern(iNo1,iNo2);
    }
}