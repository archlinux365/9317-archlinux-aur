#moved to AUR4: GI_Jack <iamjacksemail@hackermail.com>

pkgname='arachni'
pkgver=1.5
pkgrel=1
pkgdesc='A feature-full, modular, high-performance Ruby framework aimed towards helping penetration testers and administrators evaluate the security of web applications.'
arch=('any')
license=('apache')
makedepends=('git')
depends=('ruby' 'ruby-bundler')
url='http://www.arachni-scanner.com'
source=('git+git://github.com/Arachni/arachni.git')
install='arachni.install'
md5sums=('SKIP')

pkgver() {
  cd arachni

  git describe --always | sed 's|-|.|g' | sed 's/^v//'
}

package() {
  cd "$srcdir/arachni"

  install -d -m755 "$pkgdir/usr/bin"
  install -d -m755 "$pkgdir/usr/share/arachni"
  install -d -m755 "$pkgdir/usr/share/doc/arachni"
  install -d -m755 "$pkgdir/usr/share/licenses/arachni"

  install -m644 LICENSE.md "$pkgdir/usr/share/licenses/arachni"

  install -m644 *.md "$pkgdir/usr/share/doc/arachni"

  cp --no-preserve=ownership -R * "$pkgdir/usr/share/arachni"

  cat > "$pkgdir/usr/bin/arachni" << EOF
#!/bin/sh
cd /usr/share/arachni
ruby /usr/share/arachni/bin/arachni "\$@"
EOF

  cat > "$pkgdir/usr/bin/arachni_console" << EOF
#!/bin/sh
cd /usr/share/arachni
ruby /usr/share/arachni/bin/arachni_console "\$@"
EOF

  cat > "$pkgdir/usr/bin/arachni_multi" << EOF
#!/bin/sh
cd /usr/share/arachni
ruby /usr/share/arachni/bin/arachni_multi "\$@"
EOF

  cat > "$pkgdir/usr/bin/arachni_rpc" << EOF
#!/bin/sh
cd /usr/share/arachni
ruby /usr/share/arachni/bin/arachni_rpc "\$@"
EOF

  cat > "$pkgdir/usr/bin/arachni_rpcd" << EOF
#!/bin/sh
cd /usr/share/arachni
ruby /usr/share/arachni/bin/arachni_rpcd "\$@"
EOF

  cat > "$pkgdir/usr/bin/arachni_rpcd_monitor" << EOF
#!/bin/sh
cd /usr/share/arachni
ruby /usr/share/arachni/bin/arachni_rpcd_monitor "\$@"
EOF

  cat > "$pkgdir/usr/bin/arachni_script" << EOF
#!/bin/sh
cd /usr/share/arachni
ruby /usr/share/arachni/bin/arachni_script "\$@"
EOF

  chmod +x "$pkgdir"/usr/bin/*
}

