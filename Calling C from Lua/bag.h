#ifndef BAG_H
#define BAG_H

#include <cstdlib>
#include <iostream>
#include <string>

using namespace std;

class Bag
{
public:
	typedef int value_type;
	typedef size_t size_type;

	static const size_type CAPACITY = 30;

	Bag() : used(0)
	{
		for(size_type i = 0; i < CAPACITY; i++)
			data[i] = value_type(0);
	}

	void insert(const value_type& j);
	bool erase_one(const value_type& j);
	size_type erase_all(const value_type& j);
	void operator+=(const Bag& b);
	size_type size() const;
	size_type count(const value_type& j) const;
	void print() const;

private:

	value_type data[CAPACITY];
	size_type used;
};


Bag operator+(const Bag& b1, const Bag& b2);
#endif
