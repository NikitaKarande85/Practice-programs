/*
2. Write Java program which accept number of rows and number of columns from user and display below pattern.
Input :  iRow = 4  iCol = 3
Output : 1 2 3
         1 2 3
         1 2 3
         1 2 3
 */
import java.lang.*;
import java.util.*;

class DemoString
{
    void Pattern(int No1,int No2)
    {
        for (int i=0;i<No1;i++)
        {
            for(int j=1;j<=No2;j++)
            {
                    System.out.print("\t" + j);
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
        System.out.println("Enter the Coloumn:");
        int No1=sobj.nextInt();

        System.out.println("Enter second row:");
        int No2=sobj.nextInt();

        DemoString dobj=new DemoString();

         dobj.Pattern(No1,No2);
    }
}