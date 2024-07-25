/*1.Write a Java program which accept string from user and count number of capital characters.
Input :   “Marvellous Multi OS”
Output :   4

 */
import java.lang.*;
import java.util.*;
class DemoString
{
    int Count(String str)
    {
        char arr[] = str.toCharArray();
        int size=arr.length;
        int i=0;
        int iCount=0;
        while(i<size)
        {
            if(arr[i]>='A'&&arr[i]<='Z')
            {
                iCount++;
            }
            i++;
        }
        return iCount;
    }
}
class Demo
{
    public static void main(String arg[])
    {

         Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the string");
        String str=sobj.nextLine();

        DemoString dobj=new DemoString();

        int ret=dobj.Count(str);
        System.out.println("Capital letter is: " + ret);
    }
}