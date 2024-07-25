/*3. Write java program which accept N numbers from user and accept one another number as NO , return index of last occurrence of that NO.
Input :  N :   6
NO:  66
Elements : 85 66 3 66 93 88
Output : 3


Input :  N :   6
NO:  93
Elements : 85 66 3 66 93 88
Output : 4


Input :  N :   6
NO:  12
Elements : 85 11 3 15 11 111
Output : -1

 */
import java.lang.*;
import java.util.*;
class DemoArray
{
    int Check(int arr[],int iNo)
    {
        int iCount=0;
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]==iNo)
            {
                if(iCount<i)
                {
                    iCount=i;
                }
            }
        }
        if(iCount!=0)
        {
            return iCount;
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

        int ret=dobj.Check(arr,iValue);
        System.out.println("Your number last occurence index is:" + ret);

    }
}