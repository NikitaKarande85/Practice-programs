//C++ Program to Swap Two Numbers
#include<iostream>
using namespace std;
int main()
{
    int No1=0,No2=0,temp=0;
    cout<<"Enter the one number\n";
    cin>>No1;

    cout<<"Enter the one number\n";
    cin>>No2;
    
   cout<<"\n"<<"After swapping:";
   cout<<"\n"<<"No1="<<No1;
   cout<<"\n"<<"No2="<<No2;
    
    temp=No1;
    No1=No2;
    No2=temp;

    cout<<"\n"<<"Before swapping:";
    cout<<"\n"<<"No1="<<No1;
    cout<<"\n"<<"No2="<<No2<<"\n";
    return 0;
}