/*4. Write java program which accept N numbers from user and accept Range, Display all elements from that range
Input :  N :   6
  Start: 60     End :  90     Elements : 85 66 3 76 93 88
Output :85 66 76 88
Input :  N :   6
  Start: 30     End :  50     Elements : 85 66 3 76 93 88
Output :

 */
import java.lang.*;
import java.util.*;
class DemoArray
{
    void Check(int arr[],int iStart,int iEnd)
    {
        int iCount=0;
        for(int i=0;i<arr.length;i++)
        {
           if(arr[i]>iStart&&iEnd>arr[i])
           {
               System.out.println(" " + arr[i]);
           }
        }
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

        System.out.println("Enter the Start number");
        int iValue=sobj.nextInt();

        System.out.println("Enter the End number");
        int iValue2=sobj.nextInt();

        DemoArray dobj=new DemoArray();

        dobj.Check(arr,iValue,iValue2);
    }
}