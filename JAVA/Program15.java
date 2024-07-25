/*5. Write java program which accept N numbers from user and return product of all odd elements.
Input :  N :   6     Elements : 15 66 3 70 10 88
Output : 45
Input :  N :   6     Elements : 44 66 72 70 10 88
Output : 0

 */

import java.lang.*;
import java.util.*;
class DemoArray
{
    int Check(int arr[])
    {
        int iCount=0;
        int iMult=1;
        for(int i=0;i<arr.length;i++)
        {
           if(arr[i]%2!=0)
           {
               iMult=iMult*arr[i];
           }
        }
        return iMult;
    }
}
class Demo
{
    public static void main(String arg[])
    {

         Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the size");
        int size=sobj.nextInt();

        System.out.println("Enter element");

        int arr[]=new int[size];

        for (int i=0;i<arr.length;i++)
        {
            arr[i]=sobj.nextInt();
        }

        DemoArray dobj=new DemoArray();

        int ret=dobj.Check(arr);
        System.out.println("Your Product is " + ret);
    }
}