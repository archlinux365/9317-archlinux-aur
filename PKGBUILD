# Maintainer: grmat <grmat@sub.red>

pkgname=opencl-amd
pkgdesc="OpenCL userspace driver as provided in the amdgpu-pro driver stack. This package is intended to work along with the free amdgpu stack."
pkgver='18.20.621984'
pkgrel=1
arch=('x86_64')
url='http://www.amd.com'
license=('custom:AMD')
makedepends=('wget')
depends=('libdrm' 'ocl-icd')
conflicts=('amdgpocl')
provides=('opencl-driver')

DLAGENTS='https::/usr/bin/wget --referer https://support.amd.com/en-us/kb-articles/Pages/AMDGPU-PRO-Driver-for-Linux-Release-Notes.aspx -N %u'

prefix='amdgpu-pro-'
major='18.20'
minor='621984'
shared="opt/amdgpu-pro/lib/x86_64-linux-gnu"

source=("https://www2.ati.com/drivers/linux/ubuntu/${prefix}${major}-${minor}.tar.xz")
sha256sums=('d667fdd10b4f5bf975fabebb2250ba2a1ce25b1c07d57854af62e0aa94f4d757')

pkgver() {
	echo "${major}.${minor}"
}

package() {
	mkdir "${srcdir}/opencl"
	cd "${srcdir}/opencl"
	ar x "${srcdir}/${prefix}${major}-${minor}/opencl-amdgpu-pro-icd_${major}-${minor}_amd64.deb"
	tar xJf data.tar.xz
	ar x "${srcdir}/${prefix}${major}-${minor}/opencl-orca-amdgpu-pro-icd_${major}-${minor}_amd64.deb"
	tar xJf data.tar.xz
	cd ${shared}
	sed -i "s|libdrm_amdgpu|libdrm_amdgpo|g" libamdocl-orca64.so

	mkdir "${srcdir}/libdrm"
	cd "${srcdir}/libdrm"
	ar x "${srcdir}/${prefix}${major}-${minor}/libdrm-amdgpu-amdgpu1_2.4.91-${minor}_amd64.deb"
	tar xJf data.tar.xz
	cd ${shared/amdgpu-pro/amdgpu}
	rm "libdrm_amdgpu.so.1"
	mv "libdrm_amdgpu.so.1.0.0" "libdrm_amdgpo.so.1.0.0"
	ln -s "libdrm_amdgpo.so.1.0.0" "libdrm_amdgpo.so.1"

	mv "${srcdir}/opencl/etc" "${pkgdir}/"
	mkdir -p ${pkgdir}/usr/lib
	mv "${srcdir}/opencl/${shared}/libamdocl64.so" "${pkgdir}/usr/lib/"
	mv "${srcdir}/opencl/${shared}/libamdocl-orca64.so" "${pkgdir}/usr/lib/"
	mv "${srcdir}/opencl/${shared}/libamdocl12cl64.so" "${pkgdir}/usr/lib/"
	mv "${srcdir}/libdrm/${shared/amdgpu-pro/amdgpu}/libdrm_amdgpo.so.1.0.0" "${pkgdir}/usr/lib/"
	mv "${srcdir}/libdrm/${shared/amdgpu-pro/amdgpu}/libdrm_amdgpo.so.1" "${pkgdir}/usr/lib/"

	mkdir -p "${pkgdir}/opt/amdgpu/share/libdrm"
	cd "${pkgdir}/opt/amdgpu/share/libdrm"
	ln -s /usr/share/libdrm/amdgpu.ids amdgpu.ids

	rm -r "${srcdir}/opencl"
	rm -r "${srcdir}/libdrm"
}

