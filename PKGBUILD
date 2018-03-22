# Maintainer: Harry Law <h@lsf.pw>
# Contributor: Savino Jossi <savino.jossi@gmail.com>

pkgname=scientifica-font
pkgver=1.0.5
pkgrel=1
pkgdesc='Tall and condensed bitmap font for geeks.'
license=( 'SIL' )
arch=( 'any' )
url='https://github.com/NerdyPepper/scientifica'
depends=( 'xorg-fonts-encodings' 'xorg-font-utils' 'fontconfig' )
optdepends=( 'xorg-fonts-alias' )
install=scientifica-font.install
source=('https://raw.githubusercontent.com/NerdyPepper/scientifica/master/regular/scientifica-11.bdf'
        'https://raw.githubusercontent.com/NerdyPepper/scientifica/master/bold/scientificaBold-11.bdf'
        'https://raw.githubusercontent.com/NerdyPepper/scientifica/master/LICENSE')
md5sums=('2eccb0b8d69c781ff1a26b6e4093121c'
         '0965772b2f69aeec0d2f60194a167fc0'
         '77b104b57cdfb5a0e62b76a0057009df')

build(){
  msg2 "Creating font config file..."
  cat << EOF > 75-yes-scientifica.conf
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<!-- Accept scientifica font -->
  <selectfont>
   <acceptfont>
      <pattern>
  	  <patelt name="family"><string>Scientifica</string></patelt>
  	</pattern>
    </acceptfont>
  </selectfont>
</fontconfig>
EOF
}

package() {
  msg2 "Installing bitmap font files..."
  install -Dm0644 scientifica-11.bdf \
	  "${pkgdir}/usr/share/fonts/misc/scientifica-11.bdf"
  install -Dm0644 scientificaBold-11.bdf \
	  "${pkgdir}/usr/share/fonts/misc/scientificaBold-11.bdf"

  msg2 "Installing font config files..."
  install -Dm0644 75-yes-scientifica.conf \
	  "${pkgdir}/etc/fonts/conf.avail/75-yes-scientifica"

  msg2 "Installing license..."
  install -Dm0644 LICENSE \
	  "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
