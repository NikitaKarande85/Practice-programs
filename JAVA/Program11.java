/*1. Write java program which accept N numbers from user and accept one another number as NO , check whether NO is present or not.
Input :  N :   6
  NO:  66
  Elements : 85 66 3 66 93 88
Output : TRUE
Input :  N :   6
  NO:  12
  Elements : 85 11 3 15 11 111
Output : FALSE
 */

import java.lang.*;
import java.util.*;
class DemoArray
{
    Boolean Chech(int arr[],int iNo)
    {
        int iCount=0;
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]==iNo)
            {
                iCount++;
                break;
            }
        }
        if(iCount==1)
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
         Boolean ret=false;
         Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the size");
        int size=sobj.nextInt();

        System.out.println("Enter element");

        int arr[]=new int[size];

        for (int i=0;i<arr.length;i++)
        {
            arr[i]=sobj.nextInt();
        }

        System.out.println("Enter the one number to find");
        int iValue=sobj.nextInt();

        DemoArray dobj=new DemoArray();

        ret=dobj.Chech(arr,iValue);

        if(ret==true)
        {
            System.out.println("number is present");
        }
        else
        {
            System.out.println("Number is not present");
        }
    }
}