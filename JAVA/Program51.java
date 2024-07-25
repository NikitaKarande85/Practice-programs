/*5. Write a java program which accept number of rows and number of columns from user and display below pattern.
Input :  iRow = 4  iCol =  4
Output : 1 2 3 4 5
         1 2     5
         1  3    5
         1    4  5
         1 2 3 4 5
  */

import java.lang.*;
import java.util.*;

class DemoString
{
    void Pattern(int iRow,int iCol)
    {
        int i, j, k = 1;
        if (iRow < 0)
        {
            iRow = -iRow;
        }
        if (iCol < 0)
        {
            iCol = -iCol;
        }

        for (i = 1; i <= iRow; i++)
        {
            for (j = 1; j <= iCol; j++)
            {
                if (i == j)
                {
                    System.out.print(j);
                } else if (i == 1)
                {
                    System.out.print(j);
                } else if (j == 1)
                {
                    System.out.print(j);
                } else if (i == iRow)
                {
                    System.out.print(j);
                } else if (j == iCol)
                {
                    System.out.print(j);
                } else
                {
                    System.out.print("  ");
                }
              System.out.print("\t");
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