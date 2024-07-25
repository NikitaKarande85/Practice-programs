/*4. Write Java program which accept two arrays from user and form new array which is combination of contents of first and second array.
Input :  12 57 28 3
         99 23 54 58 6 67

Output : 12 57 28 3 99 23 54 58 6 67
 */

import java.lang.*;
import java.util.*;
class Arrays
{
    public void Concat(int arr[],int brr[])
    {

        int Add[]=new int[arr.length+brr.length];
        int i=0;

       for (int element:arr)
       {
           Add[i]=element;
           i++;
       }

        for(int element:brr)
        {
            Add[i]=element;
            i++;
        }
       for (int j=0;j<Add.length;j++)
       {
           System.out.print("\t" + Add[j]);
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
        aobj.Concat(arr,brr);
    }
}