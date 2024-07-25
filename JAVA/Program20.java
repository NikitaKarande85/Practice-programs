/*
5. Write a java program which accept string from user and display it in reverse order.
Input :   “MarvellouS”
Output :   “SuollevraM”
 */
import java.lang.*;
import java.util.*;
class DemoString
{
    void Pattern(String str)
    {
      char arr1[]=str.toCharArray();
      String RevStr="";
      int i=str.length()-1;
      while (i>=0)   
      {
          RevStr=RevStr+ str.charAt(i);
          i--;
      }
      System.out.println("Your Reserse string is:" + RevStr);
    }
}
class Demo
{
    public static void main(String arg[])
    {

        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the first String:");
        String str1=sobj.next();

        DemoString dobj=new DemoString();

         dobj.Pattern(str1);
    }
}