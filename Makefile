PKG := blhost

build:
	makepkg -f

install:
	sudo pacman --noconfirm -U $(PKG)-*.pkg.tar.*

clean:
	rm -rf pkg src
	rm -rf $(PKG)

update-srcinfo:
	makepkg --printsrcinfo > .SRCINFO

generate-checksums:
	makepkg -g -f -p PKGBUILD
