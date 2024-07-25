/*2. Write Java program which accept two arrays from user and display even contents of each array.
Input :  2 9 6 5 2 3
        45 6 12 18 23 4

Output :  2 6 2
          6 12 18 4               */
import java.lang.*;
import java.util.*;
class Arrays
{
    void DiplayEven(int arr[],int brr[])
    {
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]%2==0)
            {
                System.out.print("\t"+ arr[i]);
            }
        }
        System.out.print("\n");
        for(int j=0;j<brr.length;j++)
        {
            if(brr[j]%2==0)
            {
                System.out.print("\t"+ brr[j]);
            }
        }
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
        aobj.DiplayEven(arr,brr);
    }
}