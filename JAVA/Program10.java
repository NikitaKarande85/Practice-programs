/*5.Write a program which accept number from user and return difference between summation of even digits and
 summation of odd digits.
Input :  2395  Output :  -15 (2 - 17)
Input :  1018 Output :  6 (8 - 2)
Input :  8440 Output :  16  (16 - 0)
Input :  5733 Output :  -18 (0 - 18)
 */
import java.lang.*;
import java.util.*;

class Number
{
    int Count(int iNo)
    {
        if(iNo<0)
        {
            iNo=-iNo;
        }
        int iMult1=1;
        int iMult2=1;
        int iDigit=0;
        while (iNo!=0)
        {
            iDigit=iNo%10;
            if(iDigit%2==0)
            {
                iMult1=iMult1+iDigit;
            }
            else
            {
                iMult2=iMult2+iDigit;
            }
            iNo=iNo/10;
        }
        return(iMult1-iMult2);
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
       int iRet=nobj.Count(iValue);
       System.out.println("Your Count of even digit is: " + iRet);
    }
}