/*1. Write Java program which accept N numbers from user and return difference between summation of even
elements and summation of odd elements.

Input :  N :   6
Elements : 85 66 3 80 93 88
Output : 53 (234 - 181)

*/
import java.lang.*;
import java.util.*;

class EvenSum
{
    int add(int size,int arr[])
    {
        int iAns1=0;
        int i=0;
        int iAns2=0;
        int iAns3=0;
        for(i=0;i<arr.length;i++)
        {
            if(arr[i]%2==0)
            {
                iAns1=iAns1+arr[i];
            }
            else
            {
               iAns2=iAns2+arr[i];
            }
        }
        iAns3=iAns1-iAns2;
        System.out.print("Your value" + iAns3);
        return iAns3;
    }
}
class Demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the number");
        int size=sobj.nextInt();

        int arr[] = new int[size];  //malloc

        System.out.println("Enter elements");
        for(int i = 0; i < arr.length; i++)
        {
            arr[i] = sobj.nextInt();
        }

        EvenSum Eobj=new EvenSum();
        int iRet=Eobj.add(size,arr);
        System.out.println("Your Summation is:" + iRet);
    }
}