/*2. Write java program which accept N numbers from user and accept one another number as NO ,
return index of first occurrence of that NO.
Input :  N :   6
 NO:  66
 Elements : 85 66 3 66 93 88
Output : 1


Input :  N :   6
NO:  12
Elements : 85 11 3 15 11 111
Output : -1
 */
import java.lang.*;
import java.util.*;
class DemoArray
{
    int Chech(int arr[],int iNo)
    {
        int iCount=0;
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]==iNo)
            {
                iCount++;
                break;
            }
            iCount++;
        }
        if(iCount!=0)
        {
            return iCount-1;
        }
        else
        {
            return -1;
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

        System.out.println("Enter the one number to find");
        int iValue=sobj.nextInt();

        DemoArray dobj=new DemoArray();

        int ret=dobj.Chech(arr,iValue);
        System.out.println("Your Number first occurence index is:" + ret);

    }
}