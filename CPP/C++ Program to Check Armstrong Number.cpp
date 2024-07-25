// C++ Program to Check Armstrong Number
// 153 = 1^3 + 5^3 + 3^3
// 153 = 1 + 125 + 27
// 153 = 153 Not Armstrong
// 407 is armstrong
#include <iostream>
#include<math.h>
using namespace std;
int main()
{
    int iNo1 = 0, iCopy = 0, iRem = 0,iSum=0,iCount=0;
    cout << "Enter the one number:";
    cin >> iNo1;
    iCopy = iNo1;
    while(iCopy!=0)
    {
        iCount++;
        iCopy=iCopy/10;
    }

    iCopy = iNo1;

    while (iCopy != 0)
    {
        iRem = iCopy % 10;
        iSum+=pow(iRem,iCount);
        iCopy=iCopy/10;
    }
    if(iNo1==iSum)
    {
        cout<<"armstrong";
    }
    else
    {
        cout<<"Not armstrong";
    }
}