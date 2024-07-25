/* 4. Write a program which accept matrix and display addition of elements From each column.
Input :
3 2 5 9
4 3 2 2
8 4 1 9
3 9 7 5

Output : 18 18 15 25
 */
import java.lang.*;
import java.util.*;
class Matrix
{
    void addition(int arr[][])
    {
        int Add=0;
        for(int i=0;i<arr.length;i++)
        {
            for(int j=0;j<arr[i].length;j++)
            {
                Add=Add+arr[j][i];
            }
            System.out.println("" + Add);
            Add=0;
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
        mobj.addition(arr);
    }
}