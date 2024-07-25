/* 2. Write a program which accept matrix and one number from user and return frequency of that number.
Input : Number : 9

3 2 5 9
4 3 2 2
8 4 1 9
3 9 7 5

 Output : 3
 */
import java.lang.*;
import java.util.*;
class Matrix
{
   int freq(int arr[][],int iNo)
   {
       int Count=0;
       for(int i=0;i<arr.length;i++)
       {
           for(int j=0;j<arr[i].length;j++)
           {
               if(iNo==arr[i][j])
               {
                   Count++;
               }
           }
       }
       return Count;
   }
}
class Demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the Row:");
        int row=sobj.nextInt();

        System.out.println("Enter the Coloumn:");
        int col=sobj.nextInt();

        System.out.println("Enter the element");
        int arr[][]=new int[row][col];

        for (int i=0;i<arr.length;i++)
        {
            System.out.println("Row with index : "+i);
            for (int j=0;j<arr[i].length;j++)
            {
                System.out.println("Enter the element :"+i+" , "+j);
                arr[i][j]=sobj.nextInt();
            }
        }
        System.out.println("Enter the one number:");
        int iNo=sobj.nextInt();

        Matrix mobj=new Matrix();
        int ret=mobj.freq(arr,iNo);
        System.out.println("Your Frequency number is:" + ret);
    }
}