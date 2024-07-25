/*
5. Accept string from user and check whether the string is palindrome or not without considering its case.
Input :   “1abccBA1”
Output :   TRUE
 */
import java.lang.*;
import java.util.*;
class DemoString
{
    boolean Pattern(String str1)
    {
        boolean flag=true;
        int j=str1.length()-1;
        str1=str1.toLowerCase();


        for(int i=0;i<str1.length()/2;i++,j--)
        {
            if(str1.charAt(i)!=str1.charAt(j))
            {
                flag=false;
                break;
            }
        }

        if(flag)
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
        System.out.println("Enter the String:");
        String str1=sobj.nextLine();

        DemoString dobj=new DemoString();
        ret= dobj.Pattern(str1);
        if(ret==true)
        {
            System.out.println("Palindrome");
        }
        else
        {
            System.out.println("not Palindrome");
        }
    }
}