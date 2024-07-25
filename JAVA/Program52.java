/* 1.Write a program which accept matrix from user and return addition of diagonal elements.
Input :
 3 2 5 9
 4 3 2 2
 8 4 1 5
 3 9 7 5

 Output : 12
 */
import java.lang.*;
import java.util.*;
class Matrixa
{
   int AdditionDiagonal(int arr[][])
   {
       int Add=0;
       for(int i=0;i<arr.length;i++)
       {
           for(int j=0;j<arr[i].length;j++)
           {
               if(i==j)
               {
                   Add=Add+arr[i][j];
               }
           }
       }
       return Add;
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
        Matrixa mobj=new Matrixa();
        int ret=mobj.AdditionDiagonal(arr);
        System.out.println("Your Addition Diagonal:" + ret);
    }
}