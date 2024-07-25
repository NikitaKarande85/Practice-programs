/*
4. Write a java program which accept string from user and check whether it contains vowels in it or not.
Input :   “marvellous”
Output :   TRUE
Input :   “Demo”
Output :   TRUE
Input :   “xyz”
Output :   FALSE
 */
import java.lang.*;
import java.util.*;
class DemoString
{
    Boolean Count(String str)
    {
        char arr[] = str.toCharArray();
        int size=arr.length;
        int i=0,j=0;
        int iCount1=0;
        int iCount2=0;
        while(i<size)
        {
            if(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'||arr[i]=='A'||arr[i]=='E'||arr[i]=='I'||arr[i]=='O'||arr[i]=='U')
            {
                j++;
                break;
            }
            i++;
        }
        if(j==1)
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
        System.out.println("Enter the string");
        String str=sobj.nextLine();

        DemoString dobj=new DemoString();

        Boolean ret=dobj.Count(str);
        if(ret==true)
        {
            System.out.println("Vowel present");
        }
        else
        {
            System.out.println("Not present vowel");
        }
    }
}