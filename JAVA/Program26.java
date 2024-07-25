/*
5. Write Java program which accept number of rows and number of columns from user and display below pattern.
Input :  iRow = 3  iCol =  4
Output : 1 2 3 4
         5 6 7 8
         9 10 11 12
 */
import java.lang.*;
import java.util.*;

class DemoString
{
    void Pattern(int No1,int No2)
    {
        int k=1;
        for (int i=0;i<No1;i++)
        {
            for(int j=0;j<No2;j++)
            {
                    System.out.print("\t" + k);
                    k++;
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