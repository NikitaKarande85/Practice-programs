/* 5. Write a program which accept matrix and swap the contents of consecutive rows. Input :
3 2 5 9
4 3 2 2
8 4 1 9
3 9 7 5
Output :

4 3 2 2
3 2 5 9
3 9 7 5
8 4 1 9
 */
import java.lang.*;
import java.util.*;
class Matrix
{
    void swap(int arr[][])
    {

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
        mobj.swap(arr);
    }
}