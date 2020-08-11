# Maintainer: Pedro A. López-Valencia <https://aur.archlinux.org/user/vorbote>
# Contributor: Andrejs Mivreņiks <gim at fastmail dot fm>
pkgname=otf-literata
pkgver=2.00
pkgrel=1
pkgdesc="Google's default typeface for Play Books. Android distribution."
arch=('any')
url="https://play.google.com/store/apps/details?id=com.google.android.apps.books"
license=('custom:propietary')
depends=('fontconfig' 'xorg-font-util')
conflicts=('ttf-literata')
replaces=('ttf-literata')
#
# If this doesn't work, please let me know. I may need to find an alternative solution.
#
source=(
	"https://gitlab.com/vorbote/lit/-/blob/master/lit.otf"
	"https://gitlab.com/vorbote/lit/-/blob/master/liti.otf"
	"https://gitlab.com/vorbote/lit/-/blob/master/litb.otf"
	"https://gitlab.com/vorbote/lit/-/blob/master/litbi.otf"
)
b2sums=('f9786aa3152e63c38d9f3274a06edffb59a41b1cc3ac294d24bb819458396872a8117557562909a0e1da4bf98c413486cab5f4f0b6d78e4839d45da2a6730be9'
        '7242c9f3edaeea6e9c4a0cd5a8d8c1850cdba9345352165464c68614fd75f26d90550462f6ff644cd5d6fdc75c262842a964b3e7af2d35b39ce32fd14219ddeb'
        '36db3ab9e4f7bad889c6ba48ecc5eba08738c8426baa9ac567c498cd3f125886bc66d95502ed0f65bccade89e6f92a10dc44f8b4593ebd06fcd690d482f1bc9d'
        'c721534e5a9cf44a997f2f2b0ea3d38f2115afe61d987b71c80ed07493b2d3a1496e92df6dc1054efd5125ba32e2e26821081e647bd9b2e47650556b5b99cb9f')

package() {
  cd "$srcdir"

  install -dm755 "$pkgdir/usr/share/fonts/OTF/literata"

  install -m644 lit*.otf "$pkgdir/usr/share/fonts/OTF/literata"
}
