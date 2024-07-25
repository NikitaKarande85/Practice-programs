/*
2. Write Java program which accept number of rows and number of columns from user and display below pattern.
Input :  iRow = 4  iCol = 4
Output : A B C D
         a b c d
         A B C D
         a b c d
 */
import java.lang.*;
import java.util.*;

class DemoString
{
    void Pattern(int No1,int No2)
    {
        char ch1='A';
        char ch2='a';
        for (int i=0;i<No1;i++)
        {
            for(int j=0;j<No2;j++)
            {
                if(i%2==0)
                {
                    System.out.print("\t" + ch1);
                    ch1++;
                }
                else
                {
                    System.out.print("\t" + ch2);
                    ch2++;
                }

            }
            ch1='A';
            ch2='a';
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