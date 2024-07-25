/*
3. Write a program which 2 strings from user and check whether first N contents of two strings are equal or not. Note : If third parameter is greater than the size of second string then concat whole string after first string.
Input :   “Marvellous Infosystems”
          “Marvellous Logic Building”
           10
Output :  TRUE
 */
import java.lang.*;
import java.util.*;
class DemoString
{
    boolean Pattern(String str1,String str2,int no)
    {
        int i=0;
        int Copy=no;
        while (no!=0)
        {
            if((str1.charAt(i))==(str2.charAt(i)))
            {
                i++;
            }
            no--;
        }
        if(Copy==i)
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

        System.out.println("Enter the one number");
        int no=sobj.nextInt();

        DemoString dobj=new DemoString();
        ret= dobj.Pattern(str1,str2,no);
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