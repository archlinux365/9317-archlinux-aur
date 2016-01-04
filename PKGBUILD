#base on aur/nginx-mainline-libressl

_pkgname="nginx"
_user="www"
_group="www"
_doc_root="/usr/share/${_pkgname}/http"
_sysconf_path="etc"
_conf_path="${_sysconf_path}/${_pkgname}"
_tmp_path="/var/spool/${_pkgname}"
_pid_path="/run"
_lock_path="/var/lock"
_log_path="/var/log/${_pkgname}"


pkgname=nginx-mainline-boringssl
pkgver=1.9.7
pkgrel=2
pkgdesc="lightweight HTTP server, statically linked against BoringSSL."
arch=('i686' 'x86_64')

depends=('pcre' 'zlib' 'pam' 'gd' 'hardening-wrapper' 'libxslt' 'go')
makedepends=(
	'libxslt'
	'gd'
	'git'
	'cmake'
)

url="http://nginx.org"
license=('custom')
conflicts=('nginx' 'nginx-libressl' 'nginx-unstable' 'nginx-svn' 'nginx-devel' 'nginx-custom-dev' 'nginx-full') 
provides=('nginx')
backup=("${_conf_path}/nginx.conf"
	"${_conf_path}/koi-win"
	"${_conf_path}/koi-utf"
	"${_conf_path}/win-utf"
	"${_conf_path}/mime.types"
	"${_conf_path}/fastcgi.conf"
	"${_conf_path}/fastcgi_params"
	"${_conf_path}/scgi_params"
	"${_conf_path}/uwsgi_params"
	"etc/logrotate.d/nginx")

source=( "nginx.conf"
		"nginx.logrotate"
		"nginx.service"
		"http://nginx.org/download/nginx-$pkgver.tar.gz"
		"openssl.patch"
)

sha256sums=('8d8e314da10411b29157066ea313fc080a145d2075df0c99a1d500ffc7e8b7d1'
            'adcf6507abb2d4edbc50bd92f498ba297927eed0460d71633df94f79637aa786'
            '225228970d779e1403ba4314e3cd8d0d7d16f8c6d48d7a22f8384db040eb0bdf'
            'de66bb2b11c82533aa5cb5ccc27cbce736ab87c9f2c761e5237cda0b00068d73'
            'dc89dacc930bf54f371d016219f3d404df9ad5a18a7d58f9144aeb5259206df5')

build() {
	local _src_dir="${srcdir}/${_pkgname}-${pkgver}"

	export CFLAGS="-Wno-error"
	git clone https://boringssl.googlesource.com/boringssl
	cd ${srcdir}/boringssl
	mkdir build && cd build && cmake ../ && make && cd ${srcdir}/boringssl
	mkdir -p .openssl/lib && cd .openssl && ln -s ../include . && cd ../
	cp ${srcdir}/boringssl/build/crypto/libcrypto.a ${srcdir}/boringssl/build/ssl/libssl.a .openssl/lib && cd ..

	cd $_src_dir

	./configure \
		--prefix="/${_conf_path}" \
		--conf-path="/${_conf_path}/nginx.conf" \
		--sbin-path="/usr/bin/${_pkgname}" \
		--pid-path="${_pid_path}/${_pkgname}.pid" \
		--lock-path=${_pid_path}/${_pkgname}.lock \
		--http-client-body-temp-path=${_tmp_path}/client_body_temp \
		--http-proxy-temp-path=${_tmp_path}/proxy_temp \
		--http-fastcgi-temp-path=${_tmp_path}/fastcgi_temp \
		--http-uwsgi-temp-path=${_tmp_path}/uwsgi_temp \
		--http-scgi-temp-path=${_tmp_path}scgi_temp \
		--http-log-path=${_log_path}/access.log \
		--error-log-path=${_log_path}/error.log \
		--user=${_user} \
		--group=${_group} \
		--with-ipv6 \
		--with-openssl=../boringssl \
		--with-threads \
		--with-http_ssl_module \
		--with-http_gzip_static_module \
		--with-http_realip_module \
		--with-http_v2_module \
		--with-file-aio \
		--with-pcre-jit \
		--with-stream

	touch ${srcdir}/boringssl/.openssl/include/openssl/ssl.h
	patch -p0 < ../openssl.patch

	make
}

package() {
	cd "${srcdir}/${_pkgname}-${pkgver}"
	make DESTDIR="$pkgdir/" install

	sed -i -e "s/\<user\s\+\w\+;/user $_user;/g" ${pkgdir}/$_conf_path/nginx.conf
	mkdir -p ${pkgdir}/$_conf_path/sites-available/

	install -d "${pkgdir}/${_tmp_path}"
	install -d "${pkgdir}/${_doc_root}"

	mv "${pkgdir}/${_conf_path}/html/"* "${pkgdir}/${_doc_root}"
	rm -rf "${pkgdir}/${_conf_path}/html"

	install -D -m644 "${srcdir}/nginx.logrotate" "${pkgdir}/etc/logrotate.d/${_pkgname}"
	install -D -m644 "${srcdir}/nginx.conf" "${pkgdir}/etc/conf.d/${_pkgname}"
	install -D -m644 "${srcdir}/nginx.service" "${pkgdir}/usr/lib/systemd/system/nginx.service"
	install -D -m644 "LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
	install -D -m644 "man/nginx.8" "${pkgdir}/usr/share/man/man8/nginx.8"
}
