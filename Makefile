obj-m += btusb.o

KVERSION ?= $(shell uname -r)
KDIR := /lib/modules/$(KVERSION)/build
PWD := "$$(pwd)"
 
all:
	$(MAKE) -C $(KDIR) M=$(PWD) modules
 
clean:
	$(MAKE) -C $(KDIR) M=$(PWD) modules clean

insmod:
	sudo insmod btusb.ko

rmmod:
	sudo rmmod btusb.ko
