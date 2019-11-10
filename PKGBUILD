# Maintainer: John Beard <john.j.beard@gmail.com>
pkgname=goldendict-cc-cedict-content
pkgver=1.0_r20191109
pkgrel=1
pkgdesc="CC-CEDICT Chinese-English Dictionary for Goldendict"
arch=("any")
url="https://www.mdbg.net/chinese/dictionary?page=cedict"
license=("custom:cc-by-sa-4.0" "custom")
install=$pkgname.install
optdepends=(
"goldendict: for using this dictionary"
"goldendict-qt5-git: for using this dictionary"
)
makedepends=(
"pyglossary"
)
source=("cc-cedict.png"
"LICENSE"
"https://www.mdbg.net/chinese/export/cedict/cedict_1_0_ts_utf-8_mdbg.txt.gz")
md5sums=('729e16b892fb38a6d1c5853330191e93'
         '516a9f08a270850c4ac329b8e964cc50'
         'ad2fadfb9f5644bd7f08c43d1830d1db')

prepare() {

    cd "${srcdir}"

    extracted="cedict.txt"

    gzip -d -c cedict*.txt.gz > ${extracted}
}

pkgver() {

    cd "${srcdir}"

    version=$(grep -m 100 '#! version' ${extracted} | cut -d'=' -f2 | tr -d '\r\n')
    subversion=$(grep -m 100 '#! subversion' ${extracted} | cut -d= -f2 | tr -d '\r\n')
    datecode=$(grep -m 100 '#! date' ${extracted} | cut -d= -f2 | cut -dT -f1 | tr -d '\r\n-')

    verstr="${version}.${subversion}_r${datecode}"

    echo -n "${verstr}"
}

build() {

  cd "${srcdir}"

  # convert to Stardict format
  pyglossary cedict.txt cc-cedict.ifo\
    --read-format=CC-CEDICT --write-format=Stardict

  # update the bookname: this is what GoldenDict will display as the dictionary name
  sed -i 's/bookname=.*/bookname=CC-CEDICT/' cc-cedict.ifo

  # the .ifo version field if the Stardict format version, _not_ the dictionary version

  # zip the dict file to save installation space
  # gzip -c cc-cedict.dict > cc-cedict.dict.dz
}



package() {
  TARGET="/usr/share/goldendict"
  contentdir="${pkgdir}${TARGET}/content/cc-cedict"

  install -dm 755 ${contentdir}

  install -Dm 644 ${srcdir}/cc-cedict.{syn,ifo,dict,idx} ${contentdir}
  install -Dm 644 cc-cedict.png ${contentdir}

  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

