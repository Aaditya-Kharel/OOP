#include "Bag.h"

using namespace std;
using namespace chapter_3;

int main()
{
	Bag a;
	int i =23;
	for (int i = 100; i < 110; i++)
	{
		a.insert(i);
	}
	Bag b = a;
	b.print();
	return 0;
}
