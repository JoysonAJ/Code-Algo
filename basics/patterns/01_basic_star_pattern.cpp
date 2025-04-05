#include <iostream>
using namespace std;

void rectangularPattern(){
    int n;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << "*";
        }
        cout << "\n";
    }
}

void rightAnglePater(){
    int n;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            cout << "* ";
        }
        cout << "\n";
    }
}

int main()
{

    // rectangularPattern();
    rightAnglePater();
    

    return 0;
}

