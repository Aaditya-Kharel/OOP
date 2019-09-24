#include <cassert>
#include "bag.h"

typedef int value_type;
typedef int size_type;

extern "C" void* new_bag()
{
  Bag *b = new Bag();
  return static_cast<void*>(b);
}

extern "C" void delete_bag(Bag* b)
{
  delete b;
}

extern "C" size_type size(Bag* b){
assert(b != NULL);
return b->size();
}

extern "C" size_type count(Bag* b,value_type element)
{
assert(b != NULL);
return b->count(element);
}

extern "C" void insert(Bag* b,value_type element)
{
assert(b != NULL);
b->insert(element);
}

extern "C" bool erase_one(Bag* b,value_type element)
{
assert(b != NULL);
return b->erase_one(element);
}

extern "C" size_type erase_all(Bag* b,value_type element)
{
assert(b != NULL);
return b->erase_all(element);
}

extern "C" void print(Bag* b)
{
assert(b != NULL);
b->print();
}

