/*
3. Write a java program which accept string from user and return difference between
frequency of small characters and frequency of capital characters.

Input :   “MarvellouS”
Output :   6 (8-2)
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
        int iCount1=0;
        int iCount2=0;
        while(i<size)
        {
            if(arr[i]>='a'&&arr[i]<='z')
            {
                iCount1++;
            }
            else
            {
                iCount2++;
            }
            i++;
        }
        return (iCount1-iCount2);
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
        System.out.println("Capital and Small letter difference is: " + ret);
    }
}