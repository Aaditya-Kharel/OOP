local ffi = require("ffi")
local C = ffi.C

-- Extension for shared libraries
local libext = "so"
if ffi.os == "OSX" then
  libext = "dylib"
end

local libbag = ffi.load("./libbag." .. libext)

ffi.cdef[[
  /* From our library */

  typedef struct Bag Bag;
  typedef int value_type;
  typedef int size_type;

  Bag* new_bag();
  void delete_bag(Bag* b);

  void insert(Bag* b,value_type element);
  bool erase_one(Bag* b,value_type element);
  size_type erase_all(Bag* b,value_type element);
  size_type size(Bag* b);
  size_type count(Bag* b,value_type element);
  void print(Bag* b);
  
  /* From the C library */
  void free(void*);
]]


local function  bag_insert(self,target)
	libbag.insert(self.super,target)
	
end

local function bag_erase_one(self,target)
  return libbag.erase_one(self.super, target)
end

local function bag_erase_all(self, target)
  return libbag.erase_all(self.super, target)
end

local function bag_size(self)
  return libbag.size(self.super)
end

local function bag_count(self, target)
  return libbag.count(self.super, target)
  end

local function bag_print(self)
	libbag.print(self.super);
end

local bag_methods={
bag_insert=bag_insert,
bag_erase_one=bag_erase_one,
bag_erase_all=bag_erase_all,
bag_size=bag_size,
bag_count=bag_count,
bag_print=bag_print
}


local new=function(opts)
	local self={super=libbag.new_bag()}
	ffi.gc(self.super,libbag.delete_bag)
	return setmetatable(self,{ __index = bag_methods });
end 


return {new=new};
