/* 1.Write a program which accept matrix from user and display transpose of the matrix. 
The transpose of a given matrix is formed by interchanging the rows and columns of a matrix. 
Input :
3 2 5 9
4 3 2 2
8 4 1 5
3 9 7 5
Output :

3 4 8 3
2 3 4 9
5 2 1 7
9 2 5 5

 */

import java.lang.*;
import java.util.*;
class Matrix
{
        void transpose(int arr[][])
        {
            int Add=0;
            int temp;
            for(int i=0;i<arr.length;i++)
            {
                for(int j=0;j<arr[i].length;j++)
                {
                    temp=arr[i][j];
                    arr[j][i]=arr[i][j];
                    arr[i][j]=temp;
                }
            }
            for(int i=0;i<arr.length;i++)
            {
                for(int j=0;j<arr[i].length;j++)
                {
                   System.out.print(arr[i][j]);
                }
            }
        }

}
class Demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the rows:");
        int row=sobj.nextInt();

        System.out.println("Enter the column");
        int col=sobj.nextInt();

        int arr[][]=new int[row][col];

        System.out.println("Enter the element:");

        for(int i=0;i<arr.length;i++)
        {
            for(int j=0;j<arr[i].length;j++)
            {
                arr[i][j]=sobj.nextInt();
            }
        }

        Matrix mobj=new Matrix();
        mobj.transpose(arr);
    }
}