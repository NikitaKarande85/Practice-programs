// C++ Program to Check Odd Number
#include<iostream>
using namespace std;
int main()
{
    int No1=0;
    cout<<"Enter the number";
    cin>>No1;

    if(No1%2!=0)
    {
        cout<<"Odd";
    }
    else
    {
        cout<<"Not odd";
    }
    return 0;
}