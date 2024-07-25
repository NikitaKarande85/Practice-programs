/*
2.  Write a program which 2 strings from user and check whether contents of two strings are equal or not.
Input :   “Marvellous Infosystems”
          “Marvellous Infosystems”
Output :  TRUE
 */
import java.lang.*;
import java.util.*;
class DemoString
{
    boolean Pattern(String str1,String str2)
    {
        if(str1.equals(str2))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
class Demo
{
    public static void main(String arg[])
    {

        Scanner sobj=new Scanner(System.in);
        Boolean ret=false;
        System.out.println("Enter the first String:");
        String str1=sobj.nextLine();

        System.out.println("Enter the Secound String:");
        String str2=sobj.nextLine();

        DemoString dobj=new DemoString();
        ret= dobj.Pattern(str1,str2);
        if(ret==true)
        {
            System.out.println("String is Equal");
        }
        else
        {
            System.out.println("String is not Equal");
        }
    }
}