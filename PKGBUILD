# Maintainer: Donald Webster <fryfrog@gmail.com>

pkgname=sabnzbd
pkgver=3.6.0
pkgrel=1
pkgdesc='A web-interface based binary newsgrabber with NZB file support'
url='http://www.sabnzbd.org'
arch=('any')
license=('GPL')
depends=(
  'curl'
  'par2cmdline'
  'python'
  'python-six'
  'python-cffi'
  'python-cryptography'
  'python-feedparser'
  'python-pycparser'
  'python-configobj'
  'python-cherrypy'
  'python-cheroot'
  'python-guessit'
  'python-portend'
  'python-puremagic'
  'python-chardet'
  'python-notify2'
  'python-cheetah3'
  'python-sabyenc3'
  'python-pysocks'
  'python-jaraco'
  'python-jaraco.context'
  'python-more-itertools'
  'python-zc.lockfile'
  'python-dateutil'
  'python-tempora'
  'python-pytz'
  'python-sgmllib3k'
  'python-portend'
  'python-babelfish'
  'python-rebulk'
  'sqlite'
  'unrar'
  'unzip'
)

optdepends=(
  'par2cmdline-tbb: par2 multi-threading'
  'p7zip: for .7z support'
  'dbus-python: for system power management'
)

backup=('var/lib/sabnzbd/sabnzbd.ini')

install='sabnzbd.install'

source=(
  "https://github.com/sabnzbd/sabnzbd/releases/download/${pkgver}/SABnzbd-${pkgver}-src.tar.gz"
  'sabnzbd.service'
  'sabnzbd@.service'
  'sabnzbd.sysusers'
  'sabnzbd.tmpfiles'
)
        
sha256sums=('a3d04ae5ea88639469e3df5db3a64e33aa2bf19fa0f8d499cfca72b51ef2f7d5'
            'c1bcdb5ce7787aab5ab4f07508c1451441f42df0ec7be85a5dedda0a5ee70014'
            '4c4ff2882de744d1b5435470ed829d58defcc84fafc56e6211d1298c0b22813f'
            '525f294372963fde09db08b0368c80078a16d4cefcb34f8179706336709afdf7'
            '3a3c292020cca0251478c70a6499afa64aeca3dfcb6d5e32f6e21d5d4d94fa81')

package() {
  mkdir -p "${pkgdir}/usr/lib/sabnzbd"
  cp -r "${srcdir}/SABnzbd-${pkgver}/"* "${pkgdir}/usr/lib/sabnzbd"

  find "${pkgdir}/usr/lib/sabnzbd" -type d -exec chmod 755 {} \;
  find "${pkgdir}/usr/lib/sabnzbd" -type f -exec chmod 644 {} \;
  chmod 755 "${pkgdir}/usr/lib/sabnzbd/SABnzbd.py"

  install -D -m 644 "${srcdir}/sabnzbd.service" "${pkgdir}/usr/lib/systemd/system/sabnzbd.service"
  install -D -m 644 "${srcdir}/sabnzbd@.service" "${pkgdir}/usr/lib/systemd/system/sabnzbd@.service"
  install -D -m 644 "${srcdir}/sabnzbd.sysusers" "${pkgdir}/usr/lib/sysusers.d/sabnzbd.conf"
  install -D -m 644 "${srcdir}/sabnzbd.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/sabnzbd.conf"
}
