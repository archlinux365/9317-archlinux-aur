# Maintainer: luxcem <a@luxcem.fr>
# Contributor: blucell <mokhtar92@gmail.com>
# Contributor: mutlu_inek <mutlu_inek@yahoo.de>

pkgname=ttf-arabeyes-fonts
pkgver=20150617
pkgrel=2
pkgdesc="A collection of free Arabic and Farsi TrueType fonts"
url="https://arabeyes.org/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9"
license=("GPL")
arch=("any")
conflicts=("fonts-arabeyes")
replaces=("fonts-arabeyes")
source=(
	"http://downloads.sourceforge.net/project/arabeyes/Fonts/ae_fonts/ae_fonts_decorative-2.1.tar.bz2"
	"http://downloads.sourceforge.net/project/arabeyes/Fonts/farsi_fonts/farsi_fonts_0.4.tar.bz2" 
	"http://downloads.sourceforge.net/project/arabeyes/kacst_fonts/kacst_fonts_2.01.tar.bz2" 
	"http://downloads.sourceforge.net/project/arabeyes/kacst_fonts/kacst_one_5.0.tar.bz2" 
	"http://downloads.sourceforge.net/project/arabeyes/Fonts/lateef.shaikh_fonts/lateef.shaikh_fonts.tar.bz2" 
	"http://downloads.sourceforge.net/project/arabeyes/Fonts/Mothanna%200.02/Mothanna-0.02.tar.gz" 
	"http://downloads.sourceforge.net/project/arabeyes/Fonts/sharif.univ/sharif.univ_ttf.bz2" 
	"http://downloads.sourceforge.net/project/arabeyes/Fonts/Thabit%200.02/Thabit-0.02.tar.gz"
)
sha256sums=(
	"881060df10e8bd96860e09dcc0cf0bc9058c1b668f06a56358e1878c3c241d22"
	"9454c75f7a16f9e1d9590d890fe579d0c50b42178d4577d7f7ed8b012afb930c"
	"fb372e530fd6f1179bf96eca3f1f65de47ce603a709d2f98cc4a10e619e732ac"
	"1b016f49f99de16a65dcd990f229e729e6c4c6df02b23409771f6e27b69186a7"
	"369583e32d15ee2dcec725c871d4515d876576a758e5fadf8fa24fe95b5a9a3c"
	"a8b07981e153f88b5b5f91b1127974d49791cd24c8309ed06b5306f8b406a809"
	"e4098961f1df21bf598febcf7fbe1517f9b157f9be6f87f6d03bf858e3014311"
	"4c76e43f8bd398e46c01437e66a3d6ba9c738eb42d2666c7af6d1b3cfb40f24a"
)

package() {
	cd $srcdir
	mv sharif.univ_ttf sharif-univ.ttf
	install -d "$pkgdir/usr/share/fonts/TTF/arabeyes"
	find . -name "*.ttf" -exec install -m644 {} "$pkgdir/usr/share/fonts/TTF/arabeyes/" \;
}
