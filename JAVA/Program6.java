/*1.Write a java program which accept number from user and return the count of even digits.
Input :  2395  Output : 1
Input :  1018 Output :  2
Input :  -1018 Output : 2
Input :  8462 Output :  4
 */
import java.lang.*;
import java.util.*;

class Number
{
    int EvenCount(int iNo)
    {
        if(iNo<0)
        {
            iNo=-iNo;
        }
        int iCount=0;
        int iDigit=0;
        while (iNo!=0)
        {
            iDigit=iNo%10;
            if(iDigit%2==0)
            {
                iCount++;
            }
            iNo=iNo/10;
        }
        return iCount;
    }
}
class Demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the number:");
        int iValue=sobj.nextInt();

        Number nobj=new Number();
       int iRet=nobj.EvenCount(iValue);
       System.out.println("Your Count of even digit is: " + iRet);
    }
}