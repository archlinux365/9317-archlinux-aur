# Maintainer: lantw44 (at) gmail (dot) com
# Modified from guix-git 20130119 PKGBUILD

# In order to verify the PGP signature of the source archive, you may need to
# use this command to download the needed public key:
#   gpg --recv-keys 3CE464558A84FDC69DB40CFB090B11993D9AEBB5

pkgname=guix
pkgver=1.3.0
pkgrel=1
pkgdesc='A purely functional package manager for the GNU system'
arch=('x86_64' 'i686' 'armv7h')
url='https://guix.gnu.org'
license=('GPL3')
options=('!strip')
makedepends=(
  'guile-ssh>=0.13.0'
  'guile-zstd'
  'guile-semver'
  'guile-lib'
  'bash-completion'
  'fish'
  'help2man'
  'po4a')
depends=(
  'guile>=2.2.4'
  'guile-gcrypt>=0.1.0'
  'guile-sqlite3>=0.1.0'
  'guile-zlib>=0.1.0'
  'guile-lzlib'
  'guile-avahi'
  'guile-git-lib>=0.3.0'
  'guile-json>=4.3.0'
  'sqlite>=3.6.19'
  'bzip2'
  'gnutls'
  'libgcrypt')
optdepends=(
  'bash-completion: to enable bash programmable completion'
  'guile-ssh: to offload builds to other machines'
  'guile-zstd: to use and publish zstd substitutes'
  'guile-semver: to use the crate importer'
  'guile-lib: to use the go importer')
source=(
  "https://ftp.gnu.org/gnu/${pkgname}/${pkgname}-${pkgver}.tar.gz"{,.sig}
  'guix-1.3.0-revert-display-download-progress-tty.patch')
install="${pkgname}.install"
sha256sums=(
  'cb0f461c48d5823dfef7f88879a179737ee14c4dd93732d671932fc4e25053e8'
  '5c1c724a146e73b0e2b352dda1e1a4eb052e7dc89837f590693f0af23a6c404d'
  '4e110acfc8b8940b5de880ba782f607be666327a36b2ca2a124e96cc6846a560')
validpgpkeys=('27D586A4F8900854329FF09F1260E46482E63562')

prepare() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	local source_file
	for source_file in "${source[@]}"; do
		case "${source_file}" in
			*.patch)
				patch -p1 < "${srcdir}/${source_file}"
				;;
		esac
	done
}

build() {
	local bash_completion_dir="$(pkg-config --variable=completionsdir bash-completion)"
	local fish_completion_dir="$(pkg-config --variable=completionsdir fish)"
	cd "${srcdir}/${pkgname}-${pkgver}"
	./configure --prefix=/usr --sbindir=/usr/bin --sysconfdir=/etc \
		--libexecdir=/usr/lib --localstatedir=/var \
		--with-bash-completion-dir="${bash_completion_dir}" \
		--with-fish-completion-dir="${fish_completion_dir}" \
		--disable-rpath \
		ac_cv_guix_test_root="$(pwd)/t"
	make
}

check() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	# Check whether the current working directory is too long
	local cwd_str="$(pwd)"
	local cwd_len="${#cwd_str}"
	# The test tests/gexp.scm fails when the path is longer than 29 bytes
	# because of the length limit on the shebang line. Since we have increased
	# the limit by 7 by renaming test-tmp to t with ac_cv_guix_test_root cache
	# variable, the limit we use here is 36 bytes.
	if [ "${cwd_len}" -gt 36 ]; then
		error "${cwd_str} is too long."
		error "The working directory cannot be longer than 36 bytes."
		false
	fi
	# Make sure we have a valid shell accepting -c option
	SHELL=/bin/sh make check
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}" install
	# Remove unused upstart service files
	rm -r "${pkgdir}/usr/lib/upstart"
	# Remove unused openrc service files
	rm -r "${pkgdir}/etc/openrc"
	# Remove unused sysvinit service files
	rm -r "${pkgdir}/etc/init.d"
	# Remove the empty directory left by sysvinit service files as well
	rmdir "${pkgdir}/etc"
	# Rename systemd service files provided by upstream because they are not
	# usable without previous guix installation
	local system_unit_dir="${pkgdir}/usr/lib/systemd/system"
	local guix_daemon_default="${system_unit_dir}/guix-daemon.service"
	local guix_daemon_upstream="${system_unit_dir}/guix-daemon-latest.service"
	local guix_publish_default="${system_unit_dir}/guix-publish.service"
	local guix_publish_upstream="${system_unit_dir}/guix-publish-latest.service"
	mv "${guix_daemon_default}" "${guix_daemon_upstream}"
	mv "${guix_publish_default}" "${guix_publish_upstream}"
	# Generate default systemd service files from upstream ones by fixing paths
	local guix_profile_root="/var/guix/profiles/per-user/root/current-guix"
	sed -e "s|^ExecStart=${guix_profile_root}/bin|ExecStart=/usr/bin|" \
		-e "s|^Description=\(.*\)|Description=\1 (default)|" \
		-e "/^Environment=/d" "${guix_daemon_upstream}" \
		> "${guix_daemon_default}"
	sed -e "s|^ExecStart=${guix_profile_root}/bin|ExecStart=/usr/bin|" \
		-e "s|^Description=\(.*\)|Description=\1 (default)|" \
		-e "/^Environment=/d" "${guix_publish_upstream}" \
		> "${guix_publish_default}"
	# Make sure the above sed commands really work
	! cmp "${guix_daemon_default}" "${guix_daemon_upstream}"
	! cmp "${guix_publish_default}" "${guix_publish_upstream}"
	# Edit the description of upstream systemd service files
	sed -i "s|^Description=\(.*\)|Description=\1 (upstream)|" \
		"${guix_daemon_upstream}" "${guix_publish_upstream}"
	# The default makepkg strip option cannot be used here because binaries
	# installed in /usr/share must not be stripped.
	# To keep user-defined 'strip' and 'debug' options useful, we still
	# depend on 'tidy_strip' function provided by makepkg to do the stripping
	# work. To make the function useful, we have to temporarily remove the
	# '!strip' option from 'options' array. However, assignments to 'options'
	# cause mksrcinfo to insert wrong lines to .SRCINFO, so they have to be
	# put in eval.
	eval 'options=()'
	cd "${pkgdir}/usr/bin"
	# tidy_strip may exit with a non-zero return value even if all operations
	# are successful. Therefore, we have to ignore its return value to prevent
	# makepkg from reporting it as an error.
	tidy_strip || true
	eval 'options=("!strip")'
}
