# Maintainer: GordonGR <ntheo1979@gmail.com>

pkgname=singularityviewer
pkgver=1.8.7.6994
_pkgver=1_8_7_6994
pkgrel=1
pkgdesc="A Second Life (secondlife) protocol compatible client application, used to access its service as well as a number of other such as those based upon OpenSim platform"
url="http://www.singularityviewer.org/"
license=('custom')
arch=('x86_64')
depends=('apr' 'apr-util' 'gtk2' 'libgl' 'libidn' 'mesa' 'nss' 'sdl' 'libxss' 'lib32-libidn' 'lib32-libsndfile' 'lib32-zlib' 'gconf' 'lib32-util-linux' 'openal' 'expat' 'freealut')
optdepends=('libpulse: for PulseAudio support'
	'alsa-lib: for ALSA support'
	'nvidia-utils: for NVIDIA support'
	'flashplugin: for inworld Flash support'
	'gstreamer0.10: for video support, may need good, bad and ugly plugins'
	'libxtst')

source=("https://downloads.sourceforge.net/project/singularityview/alphas/SingularityAlpha-x86_64-${pkgver}.tar.bz2"
	"singularityviewer.desktop"
	"singularityviewer.launcher")
md5sums=('2420b7825a812ff6bfec48914b90a13e'
         '3b6c5641f35a099af35ff4065733049f'
         'eb596f5cf7b6f2d0c55c0082fb99a905')

package() {
cd $srcdir

# Rename Data Directory
mv SingularityAlpha-$CARCH-${pkgver} singularityviewer

# Remove old libraries
#cd $srcdir
cd singularityviewer/
cd lib64/
rm *SDL*
rm *openal*
rm *expat*
rm *apr*
rm *alut*
rm *freetype*

# Install Desktop File
install -D -m644 $srcdir/singularityviewer.desktop \
    $pkgdir/usr/share/applications/singularityviewer.desktop
  
# Install Icon File
install -D -m644 $srcdir/singularityviewer/viewer_icon.png \
  $pkgdir/usr/share/pixmaps/singularityviewer_icon.png
  
# Install Launcher
install -D -m755 $srcdir/singularityviewer.launcher \
    $pkgdir/usr/bin/singularityviewer

# Install License file
install -D -m755 $srcdir/singularityviewer/licenses.txt \
    $pkgdir/usr/share/licenses/$pkgname/LICENSE
    
# Move Data to Destination Directory
install -d $pkgdir/opt
mv $srcdir/singularityviewer $pkgdir/opt/
  
# Change Permissions of files to root:games
chown -R root:games $pkgdir/opt/singularityviewer
chmod -R g+rw $pkgdir/opt/singularityviewer

# Make Binary Group-Executable
chmod g+x $pkgdir/opt/singularityviewer/singularity

# Do not re-register the application with the desktop system at every launch, saves from locally installed desktop files.
sed -i 's|./refresh_desktop_app_entry.sh|#./refresh_desktop_app_entry.sh|' $pkgdir/opt/singularityviewer/singularity


}
