/*
 * (C)opyright MMVI Anselm R. Garbe <garbeam at gmail dot com>
 * See LICENSE file for license details.
 */

#include "wm.h"

void
draw_bar()
{
	brush.rect = barrect;
	brush.rect.x = brush.rect.y = 0;
	draw(dpy, &brush, False, 0);

	XCopyArea(dpy, brush.drawable, barwin, brush.gc, 0, 0, barrect.width,
			barrect.height, 0, 0);
	XFlush(dpy);
}
