/*
4. Accept sing from user and reverse the contents of that string by toggling the case.
Input :   “aCBdef”
Output :   “FEDcbA”
 */
import java.lang.*;
import java.util.*;
class DemoString
{
    void Pattern(String str)
    {
      char arr1[]=str.toCharArray();
      StringBuffer newstr=new StringBuffer(str);
      String RevStr="";

      int i=str.length()-1;
      while (i>=0)
      {
          if(Character.isLowerCase(str.charAt(i)))
          {
              newstr.setCharAt(i,Character.toUpperCase(str.charAt(i)));
          }
          else if(Character.isUpperCase(str.charAt(i)))
          {
              newstr.setCharAt(i,Character.toLowerCase(str.charAt(i)));
          }
          RevStr=RevStr+ newstr.charAt(i);
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