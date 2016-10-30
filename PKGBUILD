# Maintainer: Jason Scurtu (scujas) <jscurtu@gmail.com>

pkgname=room-arranger
pkgver=9.1
pkgrel=1
pkgdesc="3D room / apartment / floor planner with simple user interface."
arch=('x86_64')
license=('custom')
url='http://www.roomarranger.com'
depends=('hicolor-icon-theme')
source=(https://s3.eu-central-1.amazonaws.com/rooarr/rooarr91-linux64.tar.gz
        rooarr_run.sh
        roomarranger.desktop)
sha1sums=('f3c334fe0a0d57aa8e822168b4899c73717d6a2b'
          '1130cde134201d60908337aa842ca535d26c42d6'
          'c3fca3418c81660337a1b1feaf1891cca0ff61a9')

package() {
  cd rooarr-setup/rooarr-bin

  # Copy icons and mimetypes
  ICONDIR="$pkgdir"/usr/share/icons/hicolor

  for i in 16 32 48 64 128 256 512; do
    install -Dm644 icons/icon_${i}x$i.png "$ICONDIR"/usr/share/icons/hicolor/$ix$i/apps/roomarranger-icon.png
  done

  install -Dm644 icons/icon_256x256.png "$pkgdir"/usr/share/pixmaps/roomarranger-icon.png
  install -Dm644 icons/raFileIcon32.png "$ICONDIR"/32x32/mimetypes/application-com.roomarranger.project.png
  install -Dm644 icons/raFileObjectIcon32.png "$ICONDIR"/32x32/mimetypes/application-com.roomarranger.object.png
  install -Dm644 raproject.xml "$pkgdir"/usr/share/mime/packages/raproject.xml

  # Copy programm files
  install -d "$pkgdir"/opt
  cp -r  "$srcdir"/rooarr-setup/rooarr-bin "$pkgdir"/opt

  # Copy desktop file and launcher
  install -Dm644 "$srcdir"/roomarranger.desktop "$pkgdir"/usr/share/applications/roomarranger.desktop
  install -Dm755 "$srcdir"/rooarr_run.sh "$pkgdir"/usr/bin/rooarr_run.sh
}
