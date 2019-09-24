# To override any options, use `make -e`, e.g.
#     $ LUAJIT=/path/to/luajit make -e

ifeq ($(shell uname), Darwin)
	LIBEXT := dylib
else
	LIBEXT := so
endif


LUAJIT := luajit
CXXFLAGS := -W -Wall -g -fpic
TARGETS := libbag.$(LIBEXT)

all: $(TARGETS)
	$(LUAJIT) bagDriver.lua

lib%.$(LIBEXT): %.o bagInterface.o
	$(CXX) $(CXXFLAFGS) -shared $^ -o $@
	strip $@

clean:
	rm -f $(TARGETS)
