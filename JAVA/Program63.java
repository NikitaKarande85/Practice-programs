/*1. Write a java program which accept two arrays from user and return difference between summation of arrays.
Input :  2 9 7 5 2 3
         9 3 5 5
Output : 6

 */
import java.lang.*;
import java.util.*;
class Arrays
{
    int Concat(int arr[],int brr[])
    {
        int Sum=0;
        int Sum2=0;
       for (int i=0;i< arr.length;i++)
       {
            Sum=Sum+arr[i];
       }
        System.out.print("\n");
        for (int j=0;j< brr.length;j++)
        {
            Sum2=Sum2+brr[j];
        }
        int Result=(Sum-Sum2);
        return Result;
    }
}
class Demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter first array size:");
        int size1=sobj.nextInt();

        System.out.println("Enter Second array size:");
        int size2=sobj.nextInt();

        int arr[]=new int[size1];
        int brr[]=new int[size2];
        System.out.println("Enter the first array element:");
        for(int i=0;i<arr.length;i++)
        {
            arr[i]=sobj.nextInt();
        }
        System.out.println("Enter the Second array element:");
        for (int j=0;j<brr.length;j++)
        {
            brr[j]=sobj.nextInt();
        }
        Arrays aobj=new Arrays();
        int Ret=aobj.Concat(arr,brr);
        System.out.print("Your Difference between:" + Ret);
    }
}