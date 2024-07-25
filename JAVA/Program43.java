/* 2. Write Java program which accept String from user and display below pattern.
Input :  Hello
Output : H e l l o
         H e l l *
         H e l * *
         H e * * *
         H * * * *    */

import java.lang.*;
import java.util.*;

class DemoString
{
    void Pattern(String str)
    {
        char arr[]=str.toCharArray();
        int size=arr.length;

        for (int i=1;i<=size; i++)
        {
            for(int j=0;j<size;j++)
            {
                if(j<=size-i)
                {
                    System.out.print("" + arr[j]);
                }
                else
                {
                    System.out.print("*");
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
        System.out.println("Enter the String:");
        String str=sobj.nextLine();

        DemoString dobj=new DemoString();

        dobj.Pattern(str);
    }
}