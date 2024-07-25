/*4. Write a java program which accept two array from user and copy the contents
 of that array into another array and return new array.*/
import java.lang.*;
import java.util.*;
class Arrays
{
    public void Rev(int arr[],int brr[])
    {

        int Add1[]=new int[arr.length];
        int Add2[]=new int[brr.length];

        int i=0;
        int s=0;

       for (int element:arr)
       {
           Add1[i]=element;
           i++;
       }

        for(int element:brr)
        {
            Add2[s]=element;
            s++;
        }

        System.out.println("Array 1st copy in another array");
        for (int j=0;j<Add1.length;j++)
        {
            System.out.print("\t" + Add1[j]);
        }
        System.out.println();
        System.out.println("Array 2nd copy in another array");
        for (int k=0;k<Add2.length;k++)
        {
            System.out.print("\t" + Add2[k]);
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
        aobj.Rev(arr,brr);
    }
}