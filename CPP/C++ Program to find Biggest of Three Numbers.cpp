//C++ Program to find Biggest of Three Numbers
#include<iostream>
using namespace std;
int main()
{
    int No1=0,No2=0,No3=0;
    cout<<"Enter the number:";
    cin>>No1;

    cout<<"Enter the number:";
    cin>>No2;

    cout<<"Enter the number:";
    cin>>No3;

    if(No1>No2 && No1>No3)
    {
        cout<<"Largest number is: "<<No1;
    }
    else if(No2>No1 && No2>No3)
    {
        cout<<"Largest number is: "<<No2;
    }
    else
    {
        cout<<"Largest number is: "<<No3;
    }
    return 0;
}