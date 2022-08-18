# Maintainer: frantic1048 <i@frantic1048.com>
# Contributor: Filipe Laíns (FFY00) <lains@archlinux.org>
# Contributor: Michael Hansen <zrax0111 gmail com>
# Contributor: Francisco Magalhães <franmagneto gmail com>

pkgname=code-transparent
_pkgname=code
pkgdesc='The Open Source build of Visual Studio Code (vscode) editor - with transparency enabled.'
# Important: Remember to check https://github.com/microsoft/vscode/wiki/How-to-Contribute#prerequisites for target node version
# NodeJS versioning cheatsheet:
#   - carbon: 8
#   - dubnium: 10
#   - erbium: 12
#   - fermium: 14
#   - gallium: 16
# Important: Remember to check https://github.com/microsoft/vscode/blob/master/.yarnrc (choose correct tag) for target electron version
_electron=electron18
pkgver=1.70.2
pkgrel=1
arch=('x86_64')
url='https://github.com/microsoft/vscode'
license=('MIT')
depends=($_electron 'libsecret' 'libx11' 'libxkbfile' 'ripgrep')
optdepends=('bash-completion: Bash completions'
            'zsh-completions: ZSH completitons'
            'x11-ssh-askpass: SSH authentication')
makedepends=('git' 'gulp' 'npm' 'python' 'yarn' 'nodejs-lts-gallium')
conflicts=('code')
provides=('code' 'vscode')
install='code-transparent.install'
source=("$_pkgname::git+$url.git#tag=$pkgver"
        'code.js'
        'code.sh'
        'product_json.diff'
        'transparent.diff'
        'fix-first-window-not-transparent.diff'
        'fix-terminal-not-transparent.diff')
sha512sums=('SKIP'
            '6e8ee1df4dd982434a8295ca99e786a536457c86c34212546e548b115081798c5492a79f99cd5a3f1fa30fb71d29983aaabc2c79f4895d4a709d8354e9e2eade'
            'b8bdb0e53cf8748140ed444c9b02cb6a57a7e1e120d96861d4cc9f79744a987f0253c052a238c78aa2c3f86459c4afb6f3b687435f0588d8f640822a9908b257'
            'b1aa0d7c5b3e3e8ba1172822d75ea38e90efc431b270e0b4ca9e45bf9c0be0f60922c8618969ef071b5b6dbd9ac9f030294f1bf49bcc28c187b46d113dca63a7'
            '83a66451909a1829982b8c412447bf1cd1e2bdf7eea9fe8dcbb5facff0bf4a0d36a57d6e88af58ad8c22e005be0201567469e0704cc5420b2d1b94e255fb4b28'
            'e662f0bf3f55a82ce9bce98f22c6be80ee83c1e2241d2eca596326478887ec6b73c7d0041903e17f35a424578ccc22674354931166dc7c7d7e76bb97135e009e'
            '2c047e9c10f9ae14c10ddfb36a1da6d8814a02213d35c9c5cd47a98da8b348797c32e8bc2ce8519485f45666501aded238074656af15efc67ad6140b3ff83942')

# Even though we don't officially support other archs, let's
# allow the user to use this PKGBUILD to compile the package
# for his architecture
case "$CARCH" in
  i686)
    _vscode_arch=ia32
    ;;
  x86_64)
    _vscode_arch=x64
    ;;
  armv7h)
    _vscode_arch=arm
    ;;
  *)
    # Needed for mksrcinfo
    _vscode_arch=DUMMY
    ;;
esac

prepare() {
  cd $_pkgname

  # Change electron binary name to the target electron
  sed -i "s|exec electron |exec $_electron |" ../code.sh
  sed -i "s|#!/usr/bin/electron|#!/usr/bin/$_electron|" ../code.js

  # This patch no longer contains proprietary modifications.
  # See https://github.com/Microsoft/vscode/issues/31168 for details.
  patch -p0 < ../product_json.diff

  # enable window transparency
  patch -p1 <../transparent.diff

  # fixes sometimes the first code window is not transparent
  # https://aur.archlinux.org/packages/code-transparent/#comment-775691
  # https://github.com/electron/electron/issues/16809
  patch -p1 <../fix-first-window-not-transparent.diff

  # https://aur.archlinux.org/packages/code-transparent#comment-867126
  patch -p1 <../fix-terminal-not-transparent.diff

  # Set the commit and build date
  local _commit=$(git rev-parse HEAD)
  local _datestamp=$(date -u -Is | sed 's/\+00:00/Z/')
  sed -e "s/@COMMIT@/$_commit/" -e "s/@DATE@/$_datestamp/" -i product.json

  # Build native modules for system electron
  local _target=$(</usr/lib/$_electron/version)
  sed -i "s/^target .*/target \"${_target//v/}\"/" .yarnrc

  # Patch appdata and desktop file
  sed -i 's|/usr/share/@@NAME@@/@@NAME@@|@@NAME@@|g
          s|@@NAME_SHORT@@|Code|g
          s|@@NAME_LONG@@|Code - OSS|g
          s|@@NAME@@|code-oss|g
          s|@@ICON@@|com.visualstudio.code.oss|g
          s|@@EXEC@@|/usr/bin/code-oss|g
          s|@@LICENSE@@|MIT|g
          s|@@URLPROTOCOL@@|vscode|g
          s|inode/directory;||' resources/linux/code{.appdata.xml,.desktop,-url-handler.desktop}

  sed -i 's|MimeType=.*|MimeType=x-scheme-handler/code-oss;|' resources/linux/code-url-handler.desktop

  # Add completitions for code-oss
  cp resources/completions/bash/code resources/completions/bash/code-oss
  cp resources/completions/zsh/_code resources/completions/zsh/_code-oss

  # Patch completitions with correct names
  sed -i 's|@@APPNAME@@|code|g' resources/completions/{bash/code,zsh/_code}
  sed -i 's|@@APPNAME@@|code-oss|g' resources/completions/{bash/code-oss,zsh/_code-oss}

  # Fix bin path
  sed -i "s|return path.join(path.dirname(execPath), 'bin', \`\${product.applicationName}\`);|return '/usr/bin/code';|g
          s|return path.join(appRoot, 'scripts', 'code-cli.sh');|return '/usr/bin/code';|g" \
          src/vs/platform/environment/node/environmentService.ts
}

build() {
  cd $_pkgname

  yarn install --arch=$_vscode_arch

  gulp compile-build
  gulp compile-extension-media
  gulp compile-extensions-build
  gulp vscode-linux-$_vscode_arch-min
}

package() {
  # Install resource files
  install -dm 755 "$pkgdir"/usr/lib/$_pkgname
  cp -r --no-preserve=ownership --preserve=mode VSCode-linux-$_vscode_arch/resources/app/* "$pkgdir"/usr/lib/$_pkgname/

  # Replace statically included binary with system copy
  ln -sf /usr/bin/rg "$pkgdir"/usr/lib/code/node_modules.asar.unpacked/@vscode/ripgrep/bin/rg

  # Install binary
  install -Dm 755 code.sh "$pkgdir"/usr/bin/code-oss
  install -Dm 755 code.js "$pkgdir"/usr/lib/$_pkgname/code.js
  ln -sf /usr/bin/code-oss "$pkgdir"/usr/bin/code

  # Install appdata and desktop file
  install -Dm 644 $_pkgname/resources/linux/code.appdata.xml "$pkgdir"/usr/share/metainfo/code-oss.appdata.xml
  install -Dm 644 $_pkgname/resources/linux/code.desktop "$pkgdir"/usr/share/applications/code-oss.desktop
  install -Dm 644 $_pkgname/resources/linux/code-url-handler.desktop "$pkgdir"/usr/share/applications/code-oss-url-handler.desktop
  install -Dm 644 VSCode-linux-$_vscode_arch/resources/app/resources/linux/code.png "$pkgdir"/usr/share/pixmaps/com.visualstudio.code.oss.png

  # Install bash and zsh completions
  install -Dm 644 $_pkgname/resources/completions/bash/code "$pkgdir"/usr/share/bash-completion/completions/code
  install -Dm 644 $_pkgname/resources/completions/bash/code-oss "$pkgdir"/usr/share/bash-completion/completions/code-oss
  install -Dm 644 $_pkgname/resources/completions/zsh/_code "$pkgdir"/usr/share/zsh/site-functions/_code
  install -Dm 644 $_pkgname/resources/completions/zsh/_code-oss "$pkgdir"/usr/share/zsh/site-functions/_code-oss

  # Install license files
  install -Dm 644 VSCode-linux-$_vscode_arch/resources/app/LICENSE.txt "$pkgdir"/usr/share/licenses/$_pkgname/LICENSE
  install -Dm 644 VSCode-linux-$_vscode_arch/resources/app/ThirdPartyNotices.txt "$pkgdir"/usr/share/licenses/$_pkgname/ThirdPartyNotices.txt
}
