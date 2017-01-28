# Maintainer Yurii Kolesnykov <yurikoles@gmail.com>
# Credit: Jan de Groot <jgc@archlinux.org>

pkgname=gstreamer0.10-python
pkgver=0.10.22
pkgrel=3
pkgdesc="Python bindings for GStreamer 0.10"
arch=('i686' 'x86_64')
license=('LGPL')
url="http://gstreamer.freedesktop.org/"
depends=('pygobject>=2.20.0' 'gstreamer0.10-base>=0.10.36-3')
makedepends=('pkgconfig')
source=(http://gstreamer.freedesktop.org/src/gst-python/gst-python-${pkgver}.tar.bz2)
md5sums=('937152fe896241f827689f4b53e79b22')

build() {
  cd "${srcdir}/gst-python-${pkgver}"
  export PYTHON=python2
  sed -i -e 's%^#!.*env python$%#!/usr/bin/env python2%' examples/* gst/extend/*.py
  ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}/gst-python-${pkgver}"
  make DESTDIR="${pkgdir}" install
}
