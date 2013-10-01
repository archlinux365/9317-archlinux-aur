# Maintainer: carstene1ns <arch carsten-teibes de>

_pkgbase=pywiiload
pkgname=$_pkgbase-git
pkgver=1.2.6418f26
pkgrel=1
pkgdesc='Send homebrew executables or zip archives to your modded Wii over network'
arch=('any')
url='http://wiibrew.org/wiki/PyWiiLoad'
license=('GPL3')
depends=('python')
source=("$_pkgbase::git://github.com/dniMretsaM/PyWiiLoad.git")
md5sums=('SKIP')

prepare() {
  cd "$srcdir/$_pkgbase"

  # fix executable name in help message
  sed -i "s|^\./wiiload.py /|pywiiload |" wiiload.py
}

package() {
  cd "$srcdir/$_pkgbase"

  install -Dm755 wiiload.py $pkgdir/usr/bin/pywiiload
}
