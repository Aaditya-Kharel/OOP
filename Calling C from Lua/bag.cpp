#include "bag.h"
#include <cassert>

	void Bag::insert(const Bag::value_type& j)
	{
		assert(used<CAPACITY);
		data[used] = j;
		++used;
	}

	bool Bag::erase_one(const Bag::value_type& j)
	{
		size_type indx = -1;
		for(size_type i = 0; i < used; i++)
		{
			if(data[i] == j)
			{
				indx = i;
				break;
			}
		}
		if(indx == -1)
			return false;
		data[indx] = data[used-1];
		--used;
		return true;
	}

	size_t Bag::erase_all(const Bag::value_type& j)
	{
		size_t total = 0;
		while (erase_one(j))
			total++;
		return total;
	}

	Bag::size_type Bag::count(const Bag::value_type& j) const
	{

		Bag::size_type total = 0;
		for (int i = 0; i < used; i++)
		{
			if (j == data[i])
			{
				total++;
			}
		}
		return total;
	}

	void Bag::operator+=(const Bag& addend)
	{
		assert(used + addend.used < CAPACITY);
		for (int i = 0; i < addend.used; i++)
		{
			//insert(addend.data[i]);
			data[used] = addend.data[i];
			used++;
		}
	}

	void Bag::print() const
	{
		for (int i = 0; i < used; i++)
		{
			std::cout << data[i] << " ";
		}
		std::cout << std::endl;

	}
              
	size_t Bag::size() const
	{
		return used;
	}
