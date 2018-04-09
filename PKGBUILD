# Maintainer: Josh Marshall <jrmarsha@mtu.edu>

pkgname=hamap
pkgver='2018.march.28'
pkgrel=2
pkgdesc='High-quality Automated and Manual Annotation of Proteins.'
arch=('any')
license=('custom')
url='ftp://ftp.expasy.org'
depends=('')
makedepends=('bash')
provides=()
path='/databases/hamap'
source=(
	'LICENSE'
        "$url$path/hamap.prf.gz"
        "$url$path/hamap_alignments.tar.gz"
        "$url$path/hamap_rules.dat"
        "$url$path/hamap_seed_alignments.tar.gz"
        "$url$path/rules_index.dat"
        )
md5sums=(
'SKIP'
'SKIP'
'SKIP'
'SKIP'
'SKIP'
'SKIP'
)
sha512sums=(
'8889bf6f713bffaf3c5d3eca8867682a4f6228471d4ecd61293036780f1c24fd92a57daa7b8f5ff331f7f8a96b635935843d7cbab1ee17f514d9f0961d914d49'
'1da5c2c336d21167fd168926032862cb104d904e73d8c5d06ba6bc6fe8db599fc6413b152db7e05e0a40f45017e4e8f6313832105baafccb1dd3ee1de70de362'
'cf1bfd655a46166171528b010fc2568536ceb041eadbf9231dba5b5e8efd80a957007e6128e73da166952015a53ba7fe4073fdc8aeec91aea8d7e085ef04c3de'
'3a6c247d19d874caf296281cb8a4bc76af37cb188e631a40f66821cec0158d363295c7b23e02292d97aff3ae2aaa21d22e640c927eb2bb904ea902a90a46936d'
'75cbd71a645fc5310faaf0de8c63e305ba457f976ecabb4ce58c8a599f829bea926cb64e16f0038bcf14b623354e4694121be2bf47c9f65bfe76f4a3b9e5e6d3'
'4b1e321ef6fdc5ea71cc7bb47e8bdc7fece58610ee6272708a7f3f4ca23a5b0c97224c742b3a7b22227eb94c9d36325b956f6c2955325e8b7bfb6d258678f794'
)


package() {
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  mkdir -p  "$pkgdir/opt/$pkgname/"
  rm -f *.gz *.tgz
  find * -maxdepth 0 -regex '.+\.gz|.+\.tgz|LICENSE' -prune -o -print0 | xargs -0 -i cp -rfLH {} "$pkgdir/opt/$pkgname/"
}
