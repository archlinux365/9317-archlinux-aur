pkgname=tal-noisemaker-vst3
pkgver=4.7.0
pkgrel=1
pkgdesc="A Free Soft Synth By TAL Software (VST3)"
arch=('x86_64')
url="https://tal-software.com"
license=('EULA')
depends=('libcurl-gnutls' 'glibc')
groups=('pro-audio' 'vst3-plugins')
source=('https://tal-software.com/downloads/plugins/TAL-NoiseMaker_64_linux.zip')
md5sums=('643cab9748368a453659bd50722ab437')

package() {
  mkdir -p $pkgdir/usr/lib/vst3
  cp -r ${srcdir}/TAL-NoiseMaker.vst3 ${pkgdir}/usr/lib/vst3/TAL-NoiseMaker.vst3
  chmod +x ${pkgdir}/usr/lib/vst3/TAL-NoiseMaker.vst3/Contents/x86_64-linux/TAL-NoiseMaker.so
}
