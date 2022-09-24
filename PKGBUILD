pkgname=rime-sbxlm
pkgver=220813
pkgrel=1
pkgdesc='声笔系列码基础配置，包含声笔简码和声笔拼音'
arch=(any)
source=('fetch-release.sh' 'sbxlm-init')
sha256sums=('25753b1ae73ed951b43d0db122dd929b070df7ad38418314dc6a5956bef084fc'
            '496953ce12837de3f575c913a5317996002bcbf8ba2337f697b2efe15d2e0e5e')
makedepends=('jq' 'unzip')
optdepends=('librime-sbxlm-git' 'fcitx5-rime')
install=$pkgname.install
groups=(sbxlm)

prepare () {
  cd "$srcdir"
  curl -L $(./fetch-release.sh WIN) -o assets.zip
  unzip -uo ./assets.zip -d ./assets
  cd $srcdir/assets/sbxlm
  chmod 755 $srcdir/assets/sbxlm
  mv symbols.yaml sbxlm-symbols.yaml
  sed -i 's/import_preset: symbols/import_preset: sbxlm-symbols/g' *.schema.yaml
}

package() {
  mkdir -p $pkgdir/usr/share/sbxlm/init-userdb
  mkdir -p $pkgdir/usr/bin
  cp sbxlm-init $pkgdir/usr/bin
  cd $srcdir/assets/sbxlm
  tar czf $pkgdir/usr/share/sbxlm/init-userdb/$pkgname.tar.gz *.userdb
  cp -r $srcdir/assets/sbxlm/ $pkgdir/usr/share/rime-data/
  rm -rf $pkgdir/usr/share/rime-data/*.userdb
}
