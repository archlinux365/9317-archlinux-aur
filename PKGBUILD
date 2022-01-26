# Maintainer: Kanehekili (mat dot wegmann at gmail dot com)
pkgname=ytdownloader
wsp=YtDownloader
pkgver=1.4.1
pkgrel=1
pkgdesc="GKT3 frontend for yt-dlp (the active branch of youtube-dl) with focus on best audio and video. Uses ffmpeg for joining audio & video"
url="https://github.com/kanehekili/YoutubeDownloader"
license=('GPL2' 'MIT')
depends=('python' 'python-gobject' 'ffmpeg')
arch=('x86_64')
source=(https://github.com/kanehekili/YoutubeDownloader/releases/download/1.4.1/YtDownloader1.4.1.tar)
md5sums=(528c13203d7c2f93fc2571aa744919da)

package(){	
  cd ${srcdir}
  mkdir -p "${pkgdir}/opt/${pkgname}"
  mkdir -p "${pkgdir}/usr/share/applications"
  mkdir -p "${pkgdir}/usr/bin"
  rm $srcdir/$wsp/install.sh
  rm $srcdir/$wsp/uninstall.sh
  cp $srcdir/$wsp/YtGui.desktop $pkgdir/usr/share/applications
  cp -r $srcdir/$wsp/* $pkgdir/opt/$pkgname
  cp $srcdir/$wsp/yt-dlp $pkgdir/usr/bin/
  chmod +x ${pkgdir}/opt/${pkgname}/YtGui.py
  chmod a+rx ${pkgdir}/usr/bin/yt-dlp
  ln -s ${pkgdir}/opt/${pkgname}/YtGui.py  ${pkgdir}/usr/bin/YtGui
}


