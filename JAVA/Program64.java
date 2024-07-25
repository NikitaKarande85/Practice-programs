/*2. Write a java program which accept two two arrays from user and display minimum element of each array.
Input :  2 9 7 5 2 3
         9 3 5 5

Output : 2 3

 */
import java.lang.*;
import java.util.*;
class Arrays
{
    void Concat(int arr[],int brr[])
    {
        int Min1=0;
        int Min2=0;
        Min1=arr[0];
        Min2=brr[0];
       for (int i=0;i< arr.length;i++)
       {

            if(arr[i]<Min1)
            {
                Min1=arr[i];
            }
       }
        System.out.print("\n");
        for (int j=0;j< brr.length;j++)
        {

            if(brr[j]<Min2)
            {
                Min2=brr[j];
            }
        }
       System.out.println("First Array:" + Min1);
        System.out.println("Second Array:" + Min2);

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
        aobj.Concat(arr,brr);
    }
}