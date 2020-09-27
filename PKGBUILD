# Contributor: Aashik S  aashiks at gmail dot com
# Maintainer: http://smc.org.in
# Contributor: Akshay S Dinesh asdofindia at gmail dot com
# Contributor: Jishnu Mohan jishnu7 at gmail dot com

pkgname=ttf-malayalam-font-dyuthi
pkgver=3.0.0+20200101
pkgrel=2
pkgdesc="This is Dyuthi, a font belonging to a set of TrueType and OpenType fonts released under the GNU General Public License for Malayalam Language."
arch=(any)
url="http://smc.org.in/fonts/"
license=("OFL")
source=("http://smc.org.in/downloads/fonts/dyuthi/Dyuthi-Regular.ttf"
        "https://gitlab.com/smc/fonts/dyuthi/raw/master/LICENSE.txt"
        "https://gitlab.com/smc/fonts/dyuthi/raw/master/67-smc-dyuthi.conf")
sha256sums=('d7587e6982943aa5dee8f1c9b5a7775b80de6ba05345e2d34c37b96d3286db48'
            '3c039a91d61ba6b48397d0c1b1af9306686c79cfd0bd0735089b8499955a3e30'
            '3ca219d970748beaa7b64f3cacf398fff5f6164786f9db6a93292fa81c919652')

package() {
  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE.txt
  install -Dm644 -t "$pkgdir/usr/share/fonts/TTF/" *.ttf
  install -Dm644 -t "$pkgdir/etc/fonts/conf.d" *.conf
}
